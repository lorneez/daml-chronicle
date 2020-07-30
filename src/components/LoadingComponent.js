import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from "styled-components";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

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

function LoadingComponent() {
    return (
        <Wrapper>
            <Column>
                <Spin indicator={antIcon}/>
            </Column>
        </Wrapper>
    )
}

export default LoadingComponent;
