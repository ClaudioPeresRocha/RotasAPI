import React, { useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography, DatePicker, Space, Button, Select } from 'antd';
const { RangePicker } = DatePicker;

const originData = [];
for (let i = 0; i < 4; i++) {
  originData.push({
    key: i.toString(),
    solicitacao: 15,
    solicitante: `João`,
    passageiro: `Passageiro ${i}`,
    endereco: `London Park no. ${i}`,
    rota: `Rota (${i})`
  });
}

const empresas = [
    {
      value: '111111',
      label: 'JBS Aves',
    },
    {
      value: '22222',
      label: 'JBS Couros',
    },
 
    {
      value: 'disabled',
      label: 'Disabled',
      disabled: true,
    },
  ]

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const App = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      solicitante: '',
      passageiro: '',
      endereco: '',
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
    
  };
  const columns = [
    {
      title: 'Solic',
      dataIndex: 'solicitacao',
      width: '5%',
      editable: false,
    },
    {
      title: 'Solicitante',
      dataIndex: 'solicitante',
      width: '25%',
      editable: true,
    },
    {
      title: 'Passageiro',
      dataIndex: 'passageiro',
      width: '15%',
      editable: true,
    },
    {
      title: 'Rota',
      dataIndex: 'rota',
      width: '15%',
      editable: true,
    },
    {
      title: 'Endereco',
      dataIndex: 'endereco',
      width: '40%',
      editable: true,
    },
    {
      title: 'Operação',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
 
        
        <Form form={form} component={false}>
        <Space direction="horizontal" size={12}>
            
                <Form.Item label="Data Transporte">
                    <RangePicker />
                </Form.Item>
                <Form.Item label="Empresa">
                    <Select options={empresas} 
                     style={{
                        width: 120,
                      }}/>
                </Form.Item> 
                <Form.Item label="">
                    <Button onClick={() => console.log(data)}>Consultar</Button>
                </Form.Item>
        </Space>

        <Table
            components={{
            body: {
                cell: EditableCell,
            },
            }}
            bordered
            dataSource={data}
            columns={mergedColumns}
            rowClassName="editable-row"
            pagination={{
            onChange: cancel,
            }}
        />
        </Form>
    

    
  );
};
export default App;