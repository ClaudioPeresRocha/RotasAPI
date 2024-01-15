

import React, { useState } from 'react';

import {
  Button,
  Checkbox, 
  Form,
  Input,
  InputNumber
} from 'antd';



const { TextArea } = Input;





const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >      
      
        <Form.Item label="Nome Tarifa">
          <Input />
        </Form.Item>
        <Form.Item label="Valor">
          <InputNumber />
        </Form.Item>
       
       
      
        <Form.Item label="Descrição">
          <TextArea rows={4} />
        </Form.Item>
        
        <Form.Item label="">
          <Button>Cadastrar
          </Button>
        </Form.Item>
      
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;