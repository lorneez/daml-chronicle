import React from 'react';
import AuthContext from '../../contexts/AuthContext';
import querystring from 'querystring';

const dukeOauth = "https://oauth.oit.duke.edu/oauth/authorize.php?";
const clientId = "client_id=lorne-zhang";
const clientSecret = "&client_secret=aexEetdyPlYlU7kc3QZmCmJf5pyIql1T%KJ!=j!Ik=B+hFF7oX";
const redirectUri = "&redirect_uri=http%3A%2F%2Flocalhost%3A3000";
const responseType = "&response_type=token";
const state = "&state=2000";
const scope = "&scope=basic";
const OAuth_URL = dukeOauth + clientId + clientSecret + redirectUri + responseType + state + scope;

class Login extends React.Component {
  static contextType = AuthContext;

  componentDidMount() {
    const params = querystring.parse(window.location.hash.substring(1));
    const auth = {
      isSignedIn: true,
      token: params.access_token,
      expires: params.expires_in
    };
    if(auth.token) {
      this.context.onLogin(auth);
    }
  }

  render() {
    return (
      <div className="App">
        <a href={OAuth_URL}>Duke Login</a>
      </div>
    );
  }
}

export default Login;
