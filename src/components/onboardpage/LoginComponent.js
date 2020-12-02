import React, {useContext, useEffect} from 'react';
import { Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import LoadingComponent from "../LoadingComponent";

const OAuth_URL = require('./ColabOAuth2Routes').OAuth_URL;

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
  const { state } = auth;
  const { isSignedIn } = state;

  if(isSignedIn) {
    return <LoadingComponent></LoadingComponent>
  } else {
    return (
        <Wrapper>
          <Column>
            <div style={{
              'textAlign': 'center',
              'padding' : '10px'
            }}>
              <Avatar
                  size={100}
                  icon={<UserOutlined />}
              />
            </div>
            <div>
              <Button type={"primary"} href={OAuth_URL}>
                Login
              </Button>
            </div>
            <div>
              <Link to={'/search'}>
                Guest Login (FOR TESTING DEPLOYMENT)
              </Link>
            </div>
          </Column>
        </Wrapper>
    );
  }
};

export default LoginComponent;
