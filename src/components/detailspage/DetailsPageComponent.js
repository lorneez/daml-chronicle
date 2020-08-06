import React from 'react';
import styled from "styled-components";
import ArticleContentComponent from "./ArticleContentComponent";
import ArticleStatisticsComponent from "./ArticleStatisticsComponent";

const Wrapper = styled("div")`s
  display: flex;
`;

const Column = styled("div")`
  display: flex;
  flex-direction: column;
`;

const Row = styled("div")`
  display: flex;
  flex-direction: row;
`;

function DetailsPageComponent() {
    return (
      <Wrapper>
          <Column>
              <Row>
                  <ArticleContentComponent></ArticleContentComponent>
                  <ArticleStatisticsComponent></ArticleStatisticsComponent>
              </Row>
              <a href={'/search'}>
                  Go to search page
              </a>
          </Column>
      </Wrapper>
    );
};

export default DetailsPageComponent;
