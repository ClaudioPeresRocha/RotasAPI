require('dotenv').config();
const { Client } = require('@googlemaps/google-maps-services-js');
import { GoogleMap} from '@react-google-maps/api';

const client = new Client({});

async function getRoute() {
  try {
    const response = await client.directions({
      params: {
        origin: 'R. Buarque de Macedo, 1183 - Centenário, Montenegro - RS',
        destination: 'R. Felipe Panitz, 199 - São Paulo, Montenegro - RS',
        waypoints: [
          { location: 'R. Próspero Mottin, 396 - Ferroviário, Montenegro - RS, 92511-775' }
        ],
        
        optimizeWaypoints: true,
        key: process.env.GOOGLE_MAPS_API_KEY
      }
    });

    console.log("Retorno:", response.data);
  } catch (error) {
    if (error.response) {
      console.log("Erro de resposta:", error.response.data);
    } else if (error.request) {
      console.log("Sem resposta:", error.request);
    } else {
      console.log("Erro:", error.message);
      console.error(error);
    }
  }
}

getRoute();
