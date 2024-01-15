
import { Select } from 'antd';
import React from 'react';
import {selectCidade} from '../services/serviceCidade'
import {defaultCidade} from '../services/serviceParam'



const SelectCidade = (props) => {
  const handleChange = (value) => {
    setDefault(value)
    props.changeSelectCidade(value)
    //console.log(`selected cidade: ${value}`);
  };

 

  const [dados, setDados] = React.useState([])
  const [dadosDefaultCidade, setDefault] = React.useState("")
  

  React.useEffect(() => {

    async function getDefault(){

      const vDefaultCidade = await defaultCidade();
      //console.log(vDefaultCidade[0].param_value)
      props.changeSelectCidade(vDefaultCidade[0].param_value)
      setDefault(vDefaultCidade[0].param_value);

    }
    async function getDados() {
      const dadosCidade = await selectCidade(); 

      setDados(dadosCidade);
      getDefault();

    }
    getDados();

  },   );
  return(
    <Select
      defaultValue=""
      style={{
        width: 300,
      }}
      onChange={handleChange}
      options={dados}
      value={dadosDefaultCidade}
    />

  )
};
export default SelectCidade;