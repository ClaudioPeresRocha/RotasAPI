require('dotenv').config();
const { Client } = require('@googlemaps/google-maps-services-js');

const client = new Client({});

async function geocodeAddress(address) {
  try {
    const response = await client.geocode({
      params: {
        address: address,
        key: process.env.GOOGLE_MAPS_API_KEY
      }
    });

    if (response.data.status === "OK") {
      const result = response.data.results[0];
      const latitude = result.geometry.location.lat;
      const longitude = result.geometry.location.lng;

      console.log(`Endereço: ${address}`);
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    } else {
      console.log("Geocoding falhou:", response.data.status);
    }
  } catch (error) {
    console.error("Erro ao geocodificar:", error);
  }
}

// Substitua com o endereço desejado
geocodeAddress("R. Próspero Mottin, 379 - Ferroviário, Montenegro - RS, 95780-000");
