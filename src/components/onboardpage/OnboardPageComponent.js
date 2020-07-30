import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import LoginComponent from './LoginComponent';
import LoadingComponent from "../LoadingComponent";

function OnboardPageComponent(props) {
  const auth = useContext(AuthContext);
  if(!auth.state.isSignedIn) {
      return (
        <LoginComponent />
      );
  }
  else {
      window.location.href = "/search";
      return <LoadingComponent></LoadingComponent>;
  };
};

export default OnboardPageComponent;
