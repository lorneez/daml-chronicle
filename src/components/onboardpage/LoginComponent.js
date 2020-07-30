import React, { useContext, useEffect } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

import { AuthContext } from '../../contexts/AuthContext';
import querystring from 'querystring';
import Modal from '../../protected/Modal';

const dukeAuth = "https://oauth.oit.duke.edu/oauth/authorize.php?";
const clientId = "client_id=lorne-zhang";
const clientSecret = "&client_secret=aexEetdyPlYlU7kc3QZmCmJf5pyIql1T%KJ!=j!Ik=B+hFF7oX";
const redirectUri = "&redirect_uri=http%3A%2F%2Flocalhost%3A3000";
const responseType = "&response_type=token";
const state = "&state=2000";
const scope = "&scope=basic";

export const OAuth_URL = dukeAuth + clientId + clientSecret + redirectUri + responseType + state + scope;

// Styled Components
const Wrapper = styled("div")`
  display: flex;
  width: 100%;
`;

function LoginComponent(props) {
  const auth = useContext(AuthContext);

  useEffect(()=> {
    const { dispatch } = auth;
    const params = querystring.parse(window.location.hash.substring(1));
    const { access_token, expires_in } = params;
    const testExpires = 15;
    if (access_token) {
      let expire = new Date();
      expire.setSeconds(expire.getSeconds() + testExpires);
      const expireTime = Math.floor(expire.getTime() / 1000);
      dispatch({
        type: "LOGIN",
        payload: {
          isSignedIn: true,
          accessToken: access_token,
          expiresIn: expires_in,
          expiresDate: expireTime
        }
      });
    }
  },[auth]);

  function renderButton() {
    return (
      <div>
        <Button type={"primary"} href={OAuth_URL}>Login</Button>
      </div>
    );
  }

  return (
      <Wrapper>
          <Modal
              buttons={renderButton()}
              title="Duke Login"
          />
      </Wrapper>
  );
};

export default LoginComponent;
