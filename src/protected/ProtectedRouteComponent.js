import React, { useContext, useEffect, useState } from 'react';
import 'antd/dist/antd.css';

import { AuthContext } from '../contexts/AuthContext';
import { getAuthentication, validateAuthentication, clearAuthentication } from '../api/localStorage';
import LoadingComponent from "../components/LoadingComponent";
import ModalComponent from './ModalComponent';
import SideBarComponent from "../components/SideBarComponent";
import {OAuth_URL} from "../components/onboardpage/LoginComponent";

function ProtectedRouteComponent(props) {
  const auth = useContext(AuthContext);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [protectedComponent, setProtectedComponent] = useState(false);

  useEffect(() => {
    console.log("PROTECTED ROUTE - Validating authentication.");
    // Check if the token is valid
    const valid = validateAuthentication();
    console.log("Authentication is " + valid);
    if(valid) {
      console.log("PROTECTED ROUTE - Authentication is still valid.");
      // Check if the context is empty
      if(auth.state.accessToken == null) {
        console.log("PROTECTED ROUTE - Refreshing Auth context.");
        const { dispatch } = auth;
        const localStorageAuth = getAuthentication();
        const { accessToken, expiresIn, expiresDate } = localStorageAuth;
        dispatch({
          type: "REFRESH",
          payload: {
            isSignedIn: true,
            accessToken: accessToken,
            expiresIn: expiresIn,
            expiresDate: expiresDate
          }
        });
      }
      setProtectedComponent(true);
      console.log("Protected is: " + protectedComponent);
    }
    else {
      console.log("PROTECTED ROUTE - Authentication is invalid.")
      clearAuthentication();
      setProtectedComponent(false);
      console.log("Protected is: " + protectedComponent);
    };
    //setLoadingScreen(false);
    setTimeout(() => {
      setLoadingScreen(false);
      console.log("Loading is: " + loadingScreen);
    }, 1000);
  }, [auth, loadingScreen, protectedComponent]);

  function renderComponent() {
    if(loadingScreen) {
      console.log("Loading is: " + loadingScreen);
      return (
          <LoadingComponent></LoadingComponent>
      )
    }
    else {
      if (protectedComponent) {
        console.log("returning component");
        return (
            <SideBarComponent component={props.component}></SideBarComponent>
        );
      } else {
        console.log("returning modal");
        return (
            <div>
              {props.component()}
              <ModalComponent
                  url={OAuth_URL}
                  title="Reauthenticate Login"
                  ok={"Login"}
                  cancel={"Exit Page"}
              />
            </div>
        );
      };
    };
  }

  return renderComponent();
};

export default ProtectedRouteComponent;
