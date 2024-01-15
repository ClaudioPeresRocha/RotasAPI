import React from 'react';
import { Menu} from 'antd';
import {HomeOutlined, LinkOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
const App = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.Item key="mail" icon={<HomeOutlined />}>
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.SubMenu key="SubMenu" title="Opções" icon={<SettingOutlined />}>
      <Menu.Item key="two" icon={<LinkOutlined />}>
        <Link to="/App">UpLoad</Link>
      </Menu.Item>
      <Menu.Item key="three" icon={<AppstoreOutlined />}>
        <Link to="EditColaborador">Editar Colaborador</Link>
      
      </Menu.Item>
      <Menu.Item key="four" icon={<AppstoreOutlined />}>
        <Link to="TableObject">Objetos</Link>      
      </Menu.Item>

      <Menu.Item key="five" icon={<AppstoreOutlined />}>
        <Link to="UploadFilePerformed">UpLoad</Link>      
      </Menu.Item>

      
      <Menu.ItemGroup title="Item Group">
        <Menu.Item key="fourr" icon={<AppstoreOutlined />}>
          Navigation Fourr
        </Menu.Item>
        <Menu.Item key="fivee" icon={<AppstoreOutlined />}>
          Navigation Fivee
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
  </Menu>
);
export default App;