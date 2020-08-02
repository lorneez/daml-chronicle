import React, { useState } from 'react';
import styled from "styled-components";
import 'antd/dist/antd.css';
import '../../index.css';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader, Radio, Form } from 'antd';
import ArticleListComponent from "./ArticleListComponent";

const { Option } = Select;
const { Search } = Input;

const Wrapper = styled("div")`s
  display: flex;
`;

const SearchElement = styled('div')`
    padding-top: 2%;
    padding-bottom: 2%;
`;

function SBERTSearchComponent() {

    return (
        <Wrapper>
            <SearchElement>
                <div>SBERT Embedding Search finds the most similar article by looking for content and theme associations in the articles.</div>
                <Search
                    placeholder={'Search'}
                    onSearch={value => console.log(value)}
                    allowClear={true}
                />
            </SearchElement>
            <div>
                <ArticleListComponent />
            </div>
        </Wrapper>
    );
};

export default SBERTSearchComponent;