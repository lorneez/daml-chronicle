import React from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import Login from './Login';

class OnboardPage extends React.Component {
  static contextType = AuthContext;

  render() {
    console.log(this.context.state.isSignedIn);
    if(!this.context.state.isSignedIn) {
      return (
        <Login />
      );
    }
    else {
      window.location.href = "/search";
      return<div>loading</div>;
    };
  };
};

export default OnboardPage;
