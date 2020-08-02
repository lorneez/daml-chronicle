import React from 'react';
import styled from "styled-components";

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

function DetailsPageComponent() {
    return (
      <Wrapper>
          <Column>
              <a href={'/search'}>
                  Go to search page
              </a>
          </Column>
      </Wrapper>
    )
};

export default DetailsPageComponent;
