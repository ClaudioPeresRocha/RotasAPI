
import axios from 'axios';
import { urlAPI } from '../component/utils';

export async function selectCidade(){
    const response = await axios.get(urlAPI + '/selectCidade')
    //console.log('Dados service: ', response.data)
    return response.data;

 
}



