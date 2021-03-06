import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

function SideBarComponent(props) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider theme="dark" collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <div className="logo"></div>
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                    {/*<Menu.Item key="1" icon={<PieChartOutlined />}>*/}
                    {/*    <Search*/}
                    {/*        placeholder={'John Smith'}*/}
                    {/*        onSearch={value => console.log(value)}*/}
                    {/*        allowClear={true}*/}
                    {/*    />*/}
                    {/*</Menu.Item>*/}
                    <Menu.Item key="2" icon={<PieChartOutlined />}>
                        Dashboard
                    </Menu.Item>
                    {/*<Menu.Item key="3" icon={<DesktopOutlined />}>*/}
                    {/*    Data Visualizations*/}
                    {/*</Menu.Item>*/}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="header">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to=
                                {"/search"}>
                            </Link>
                            Search
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to=
                                {"/about"}>
                            </Link>
                            About
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to=
                                {"/contact"}>
                            </Link>
                            Contact
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Name</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {props.component()}
                        </Content>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Duke Chronicle Analytics ©2020 Created by DAML</Footer>
            </Layout>
        </Layout>
    );
}

export default SideBarComponent;