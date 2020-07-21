import React from 'react';

import { AuthContext } from '../../contexts/AuthContext';
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
    const { state, dispatch } = this.context;
    const params = querystring.parse(window.location.hash.substring(1));
    console.log(params.access_token);

    if(params.access_token) {
      var expire = new Date();
      expire.setSeconds(expire.getSeconds() + params.expires_in);
      const expireTime = Math.floor(expire.getTime() / 1000);
      console.log(expireTime)
      dispatch({
        type: "LOGIN",
        payload: {
          isSignedIn: true,
          accessToken: params.access_token,
          expiresIn: params.expires_in,
          expiresDate: expireTime
        }
      });
    }
  }

  render() {
    return (
      <div>
        <a href={OAuth_URL}>Duke Login</a>
      </div>
    );
  }
}

export default Login;
