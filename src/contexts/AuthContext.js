import React from 'react';

const AuthContext = React.createContext({
  auth: {
    isSignedIn: false,
    token: null,
    expires: null,
  }
});

export class AuthStore extends React.Component {
  state = { isSignedIn: false, token: null, expires: null }

  onLogin = (auth) => {
    this.setState(auth);
  }

  onLogout = () => {
    this.setState({ isSignedIn: false, token: null, expires: null });
  }

  render() {
    return (
      <AuthContext.Provider value={{ ...this.state, onLogin: this.onLogin, onLogout: this.onLogout }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  };
};

export default AuthContext;
