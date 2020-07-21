import React from 'react';
import { Link } from 'react-router-dom';

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
      return (
        <Link to={'/details'}>go to details</Link>
      )
    };
  };
};

export default OnboardPage;
