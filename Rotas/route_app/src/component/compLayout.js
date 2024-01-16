import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

import CadastroTipoVeiculo from '../pages/cadastroTipoVeiculo';
import CadastroMensagem from '../pages/cadastroMensagem'
import CadastroTarifa from '../pages/cadastroTarifas'
import CadastroRota from '../pages/cadastroRota'
import SolicitacaoTransporteExtra from '../pages/solicitacaoTransporteExtra'

import ExtratoTransporteExtra from '../pages/extratoTransporteExtra'

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
    getItem('Cadastros', '0', <DesktopOutlined />, 
    [
    getItem(<Link to="cadastroTipoVeiculo">Cadastro Tipo Veículo</Link>, '1'),
    getItem(<Link to="cadastroMensagem">Cadastro Mensagem</Link>, '2'),
    getItem(<Link to="cadastroTarifa">Cadastro Tarifa</Link>, '3'),
    getItem(<Link to="cadastroRota">Cadastro Rota</Link>, '4'),
    getItem(<Link to="solicitacaoTransporteExtra">Solicitação Transporte Extra</Link>, '44'),
    

    
    ]),
    getItem('Relatórios', 'sub1', <PieChartOutlined/>, [
     getItem(<Link to="ExtratoTransporteExtra">Extrato Transporte Extra</Link>, '5'),
      getItem('Bill', '6', <UserOutlined />),
      getItem('Alex', '7'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '8'), getItem('Team 2', '9')]),
    getItem('Files', '10', <FileOutlined />),
  ];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
              <Routes>
                
                <Route path='/' element={<div>Inicio</div>} />         
                <Route path='/cadastroTipoVeiculo' element={<CadastroTipoVeiculo />} />
                <Route path='/cadastroMensagem' element={<CadastroMensagem />}/>
                <Route path='/CadastroTarifa' element={<CadastroTarifa />} />
                <Route path='/cadastroRota' element={<CadastroRota />} />
                <Route path='/extratoTransporteExtra' element={<ExtratoTransporteExtra />} />                
                <Route path='/solicitacaoTransporteExtra' element={<SolicitacaoTransporteExtra />} />
                
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Cláudio Rocha ©{new Date().getFullYear()} - claudioperesrocha@gmail.com
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
