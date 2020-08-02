import React, { useState } from 'react';
import styled from "styled-components";
import 'antd/dist/antd.css';
import '../../index.css';
import { Input, Col, Row, Select, DatePicker, Radio, Form } from 'antd';
import ArticleListComponent from "./ArticleListComponent";

const { Option } = Select;
const { Search } = Input;

const Wrapper = styled("div")`s
  display: flex;
`;

const SelectContainer = styled(Form)`
  width: 100%;
  height: auto;
  text-align: center;
  background-color: #DCDCDC;
  padding: 2%;
  border-radius: 15px;
`;

const SelectElement = styled(Form.Item)`
    width: 30%;
    text-align: left;
`;

const SearchElement = styled('div')`
    padding-top: 2%;
    padding-bottom: 2%;
`;

function StandardSearchComponent() {
    const [searchOrder, setSearchOrder] = useState('date');

    return (
        <Wrapper>
            <SearchElement>
                <Search
                    placeholder={'Search'}
                    onSearch={value => console.log(value)}
                    allowClear={true}
                />
            </SearchElement>
            <SelectContainer>
                <Col>
                    <div style={{ 'text-align': 'left' }}>
                        Advanced Options
                    </div>
                    <Row>
                        <SelectElement labelCol={{ span: 24 }} label={"Headline/Title"}>
                            <Input placeholder={'duke university'} style={{ 'width': '90%' }}></Input>
                        </SelectElement>
                        <SelectElement labelCol={{ span: 24 }} label={"Writer/Photographer"}>
                            <Input placeholder={'john smith'} style={{ 'width': '90%' }}></Input>
                        </SelectElement>
                        <SelectElement labelCol={{ span: 24 }} label={"Tags"}>
                            <Input placeholder={'chapel, wilson, alumni'} style={{ 'width': '90%' }}></Input>
                        </SelectElement>
                    </Row>
                    <Row>
                        <SelectElement labelCol={{ span: 24 }} label={"Type"}>
                            <Select placeholder={"type"} style={{ 'width': '90%' }}>
                                <Option value="type1">type1</Option>
                                <Option value="type2">type2</Option>
                            </Select>
                        </SelectElement>
                        <SelectElement labelCol={{ span: 24 }} label={"Date Range"}>
                            <DatePicker.RangePicker style={{ 'width': '90%' }}/>
                        </SelectElement>
                        <SelectElement labelCol={{ span: 24 }} label={"Order By"}>
                            <Radio.Group style={{ 'width': '90%' }} value={searchOrder} onChange={(e) => setSearchOrder(e)}>
                                <Radio.Button value="date">Date</Radio.Button>
                                <Radio.Button value="time">Time</Radio.Button>
                            </Radio.Group>
                        </SelectElement>
                    </Row>
                </Col>
            </SelectContainer>
            <div>
                <ArticleListComponent />
            </div>
        </Wrapper>
    );
};

export default StandardSearchComponent;