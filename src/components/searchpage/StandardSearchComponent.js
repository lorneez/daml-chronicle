import React, { useState } from 'react';
import styled from "styled-components";
import 'antd/dist/antd.css';
import '../../index.css';
import { Input, Col, Row, Select, DatePicker, Radio, Form } from 'antd';
import ArticleListComponent from "./ArticleListComponent";

const { Option } = Select;
const { Search } = Input;

const SelectElement = styled(Form.Item)`
    text-align: left;
`;



function StandardSearchComponent() {
    const [searchOrder, setSearchOrder] = useState('date');

    return (
        <div className={"container"}>
            <div className={"section"}>
                <Search
                    placeholder={'Search'}
                    onSearch={value => console.log(value)}
                    allowClear={true}
                />
            </div>

            <div className={"section"} style={{backgroundColor: "#DCDCDC", borderRadius: "15px", padding: "15px"}}>
                <div>
                    <div style={{ 'textAlign': 'left' }}>
                        Advanced Options
                    </div>
                    <div className="columns is-desktop">
                        <div className="column">
                            <SelectElement labelCol={{ span: 24 }} label={"Headline/Title"}>
                                <input class={"input is-info"} type="text" placeholder={'duke university'}/>
                            </SelectElement>
                        </div>
                        <div className="column">
                            <SelectElement labelCol={{ span: 24 }} label={"Writer/Photographer"}>
                                <input class={"input is-info"} type="text" placeholder={'john smith'}/>
                            </SelectElement>
                        </div>
                        <div className="column" >
                            <SelectElement labelCol={{ span: 24 }} label={"Tags"}>
                                <input class="input is-info" type="text" placeholder={'chapel, wilson, alumni'}/>
                            </SelectElement>
                        </div>
                    </div>
                    <div className="columns is-desktop">
                        <div className="column">
                            <SelectElement labelCol={{ span: 24 }} label={"Type"}>
                                <Select placeholder={"type"} style={{ 'width': '90%' }}>
                                    <Option value="type1">type1</Option>
                                    <Option value="type2">type2</Option>
                                </Select>
                            </SelectElement>
                        </div>
                        <div className="column">
                            <SelectElement labelCol={{ span: 24 }} label={"Date Range"}>
                                <DatePicker.RangePicker style={{ 'width': '90%' }}/>
                            </SelectElement>
                        </div>
                        <div className="column">
                            <SelectElement labelCol={{ span: 24 }} label={"Order By"}>
                                <Radio.Group style={{ 'width': '90%' }} value={searchOrder} onChange={(e) => setSearchOrder(e)}>
                                    <Radio.Button value="date">Date</Radio.Button>
                                    <Radio.Button value="time">Time</Radio.Button>
                                </Radio.Group>
                            </SelectElement>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <ArticleListComponent />
            </div>
        </div>
    );
};

export default StandardSearchComponent;