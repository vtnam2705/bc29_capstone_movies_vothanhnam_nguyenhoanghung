import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    EyeOutlined,
    FolderViewOutlined,
    FolderAddOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    // getItem('Option 1', '1', <PieChartOutlined />),
    // getItem('Option 2', '2', <DesktopOutlined />),
    // getItem('User', 'sub1', <UserOutlined />, [
    //     getItem('Tom', '3'),
    //     getItem('Bill', '4'),
    //     getItem('Alex', '5'),
    // ]),
    getItem('Users', 'sub1', <UserOutlined />, [
        getItem('User Admin', '/admin/user-management', <UserOutlined />),
        getItem('Add User ', '/admin/user-management/create', <UserOutlined />),
    ]),
    getItem('Films', 'sub2', <EyeOutlined />, [
        getItem('Film', '/admin/movie-management', <FolderViewOutlined />),
        getItem('Add Moive', '/admin/movie-management/create', <FolderAddOutlined />),
    ]),
];



export default function AdminLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const handleClick = (e) => {
        navigate(`${e.key}`)
    }
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu
                    onClick={handleClick}
                    theme="dark"
                    defaultSelectedKeys={['admin/movie-management']}
                    defaultOpenKeys={['sub2']}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    {/* <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Movie Web Project Created by Vo Thanh Nam & Nguyen Hoang Hung
                </Footer>
            </Layout>
        </Layout>
    );
}
