import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';



import CompLayout from './component/compLayout'
import reportWebVitals from './reportWebVitals';


import ptBR from "antd/es/locale/pt_BR";

import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < ConfigProvider locale={ptBR}>
    <CompLayout />
    


 

    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
