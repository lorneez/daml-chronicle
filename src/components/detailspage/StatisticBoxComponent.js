import React from 'react';
import styled from "styled-components";
import 'antd/dist/antd.css';
import '../../index.css';
import { Card } from 'antd';

const Title = styled('div')`
    font-size: 25px;
`

const Description = styled('div')`

`
const Row = styled("div")`
  display: flex;
  flex-direction: row;
`;

function StatisticsBoxComponent() {
    return(
        <Card title="Statistic" style={{ 'width': '40%' }}>
            <Row>
                <Title>1435</Title>
                <Description>Views</Description>
            </Row>
        </Card>
    );
};

export default StatisticsBoxComponent;