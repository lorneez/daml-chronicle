import React from 'react';
import { Redirect } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';
import { getAuthentication, validateAuthentication } from '../api/localStorage';

class ProtectedRoute extends React.Component {
  static contextType = AuthContext;

  render() {
    console.log("PROTECTED ROUTE - Validating authentication.");
    const valid = validateAuthentication();
    // Check if the token is valid
    if(valid) {
      console.log("PROTECTED ROUTE - Authentication is still valid.");
      // Check if the context is empty
      if(this.context.state.accessToken == null) {
        console.log("PROTECTED ROUTE - Refreshing Auth context.");
        const { dispatch } = this.context;
        const auth = getAuthentication();
        dispatch({
          type: "REFRESH",
          payload: {
            isSignedIn: true,
            accessToken: auth.accessToken,
            expiresIn: auth.expiresIn,
            expiresDate: auth.expiresDate
          }
        });
      }
      const Component = this.props.component;
      return <Component />;
    }
    else {
      console.log("PROTECTED ROUTE - Authentication is invalid.")
      return <Redirect exact to={{ pathname: '/' }} />;
    }
  }
}

export default ProtectedRoute;
