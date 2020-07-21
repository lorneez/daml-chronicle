import React from 'react';
import AuthContext from '../../contexts/AuthContext';

class Logout extends React.Component {
  static contextType = AuthContext;

  onLogout = () => {
    this.context.onLogout();
    window.location.href = '/'
  }

  render() {
    console.log(this.context.isSignedIn)
    return (
      <div className="App">
        <button onClick={this.onLogout}>logout</button>
      </div>
    );
  }
}

export default Logout;
