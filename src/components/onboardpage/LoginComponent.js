import React, { useContext, useEffect } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

import { AuthContext } from '../../contexts/AuthContext';
import querystring from 'querystring';
import LoadingComponent from "../LoadingComponent";

const dukeAuth = "https://oauth.oit.duke.edu/oauth/authorize.php?";
const clientId = "client_id=lorne-zhang";
const clientSecret = "&client_secret=aexEetdyPlYlU7kc3QZmCmJf5pyIql1T%KJ!=j!Ik=B+hFF7oX";
const redirectUri = "&redirect_uri=http%3A%2F%2Flocalhost%3A3000";
const responseType = "&response_type=token";
const state = "&state=2000";
const scope = "&scope=basic";

export const OAuth_URL = dukeAuth + clientId + clientSecret + redirectUri + responseType + state + scope;

// Styled Components
const Wrapper = styled("div")`s
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Column = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;


function LoginComponent(props) {
  const auth = useContext(AuthContext);
  const { isSignedIn } = auth;
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

  if(isSignedIn) {
    return <LoadingComponent></LoadingComponent>
  } else {
    return (
        <Wrapper>
          <Column>
            Duke Login
            <div>
              <Button type={"primary"} href={OAuth_URL}>
                Login
              </Button>
            </div>
          </Column>
        </Wrapper>
    );
  }
};

export default LoginComponent;
