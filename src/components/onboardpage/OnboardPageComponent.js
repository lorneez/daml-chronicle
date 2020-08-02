import React  from 'react';

import { getAuthentication } from "../../api/localStorage";
import LoginComponent from './LoginComponent';
import LoadingComponent from "../LoadingComponent";

function OnboardPageComponent(props) {
  const localAuth = getAuthentication();
  if(true){
      return (
          <LoginComponent></LoginComponent>
      )
  }
  // if(localAuth === null || localAuth.isSignedIn === false) {
  //     return (
  //         <LoginComponent />
  //     );
  // }
  else {
      window.location.href = "/search";
      return <LoadingComponent></LoadingComponent>;
  };
};

export default OnboardPageComponent;
