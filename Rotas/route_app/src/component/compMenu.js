import React, { useState } from 'react';
import { Link } from "react-router-dom"
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Relatórios', 'sub1', <PieChartOutlined />,
  [
    getItem('Extrato', '1'),
    getItem(<Link to="/App">UpLoad</Link>, '2'),
    getItem('Option 7', '3'),
    getItem('Option 8', '4'),
  ]
  ),
  getItem('Option 2', '5', <DesktopOutlined />),
  getItem('Option 3', '6', <ContainerOutlined />),
  getItem('Navigation One', 'sub2', <MailOutlined />, [
    getItem('Option 5', '7'),
    getItem('Option 6', '8'),
    getItem('Option 7', '9'),
    getItem('Option 8', '10'),
  ]),
  getItem('Navigation Two', 'sub3', <AppstoreOutlined />, [
    getItem('Option 9', '11'),
    getItem('Option 10', '12'),
    getItem('Submenu', 'sub4', null, [getItem('Option 1', '13'), getItem('Option 12', '14')]),
  ]),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default App;