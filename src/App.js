import React from 'react';

const querystring = require('querystring');

const dukeOauth = "https://oauth.oit.duke.edu/oauth/authorize.php?";
const clientId = "client_id=lorne-zhang";
const clientSecret = "&client_secret=aexEetdyPlYlU7kc3QZmCmJf5pyIql1T%KJ!=j!Ik=B+hFF7oX";
const redirectUri = "&redirect_uri=http%3A%2F%2Flocalhost%3A3000";
const responseType = "&response_type=token";
const state = "&state=2000";
const scope = "&scope=basic";
const OAuth_URL = dukeOauth + clientId + clientSecret + redirectUri + responseType + state + scope;

class App extends React.Component {
  state = { token: null, expires: null };

  componentDidMount() {
    const params = querystring.parse(window.location.hash.substring(1));
    const token = params.access_token;
    const expires = params.expires_in;
    console.log(window.location.hash)
    this.setState({ token: token });
    this.setState({ expires: expires });
  }

  render() {
    return (
      <div className="App">
        <a href={OAuth_URL}>Duke Login</a>
        <p>Access Token: {this.state.token}</p>
        <p>Expires In: {this.state.expires}</p>
      </div>
    );
  }
}

export default App;
