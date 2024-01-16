

import React, { useState } from 'react';

import {
  Button,
 
  Form,
  Input,
  InputNumber
} from 'antd';



const { TextArea } = Input;





const FormDisabledDemo = () => {
  
 //if (1==1){
  return (   
    <>      
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={false}
        style={{
          maxWidth: 600,
        }}
      >      
        <Form.Item label="Tipo Veículo">
          <Input />
        </Form.Item>

        <Form.Item label="Qtd. Lugares">
          <InputNumber />
        </Form.Item>
       
       
      {
      1 == 0 ? 
      (<Form.Item label="Descrição">
        <TextArea  rows={4} placeholder="Descrever detalhes do veículos"/>
      </Form.Item>)
      :
      ("")

      }
        
        
        <Form.Item label="">
          <Button>Cadastrar
          </Button>
        </Form.Item>
      
      </Form>
    </>
  );
 
 
  
};


export default () => <FormDisabledDemo />;