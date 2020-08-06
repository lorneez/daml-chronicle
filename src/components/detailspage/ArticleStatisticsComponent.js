import React from 'react';
import styled from "styled-components";
import StatisticsBoxComponent from "./StatisticBoxComponent";

const Wrapper = styled('div')`
    width: 60%;
`
const Column = styled("div")`
  display: flex;
  flex-direction: column;
`;

const Row = styled("div")`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-around;
`;

function ArticleStatisticsComponent() {
    return(
        <Wrapper>
            <Row>
                <StatisticsBoxComponent />
                <StatisticsBoxComponent />
            </Row>
            <Row>
                <StatisticsBoxComponent />
                <StatisticsBoxComponent />
            </Row>
            <Row>
                <StatisticsBoxComponent />
                <StatisticsBoxComponent />
            </Row>
        </Wrapper>
    );
};

export default ArticleStatisticsComponent;