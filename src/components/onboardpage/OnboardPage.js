import React from 'react';
import Login from './Login';
import AuthContext from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

class OnboardPage extends React.Component {
  static contextType = AuthContext;

  render() {
    if(!this.context.isSignedIn) {
      return (
        <div className="ui container">
          <Login />
        </div>
      );
    }
    else {
      console.log(this.context.isSignedIn)
      return <Link to={'/search'}>go to search</Link>;

    };
  };
};

export default OnboardPage;
