import React, { useState } from 'react';
import styled from "styled-components";
import 'antd/dist/antd.css';
import '../../index.css';
import { Tabs } from 'antd';
import StandardSearchComponent from "./StandardSearchComponent";
import SBERTSearchComponent from "./SBERTSearchComponent";
import { clearAuthentication } from "../../api/localStorage";

const { TabPane } = Tabs;

const Wrapper = styled("div")`s
  display: flex;
`;

function SearchPageComponent() {

    return (
        <Wrapper>
            <Tabs type="card">
                <TabPane tab="Standard" key="standard">
                    <StandardSearchComponent />
                </TabPane>
                <TabPane tab="SBERT" key="SBERT">
                    <SBERTSearchComponent />
                </TabPane>
            </Tabs>
            <a href={'/details'}>
                Go to details Page
            </a>
            <button onClick={() => clearAuthentication()}>
                Clear auth
            </button>
        </Wrapper>
    );
};

export default SearchPageComponent;
