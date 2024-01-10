require('dotenv').config();
const express = require('express');
const { Client } = require('@googlemaps/google-maps-services-js');

const app = express();
const client = new Client({});
const port = 5000; // Você pode escolher outra porta

app.use(express.json());

app.get('/geocode', async (req, res) => {
  const address = req.query.address;

  if (!address) {
    return res.status(400).send({ error: 'Endereço não fornecido.' });
  }

  try {
    const response = await client.geocode({
      params: {
        address: address,
        key: process.env.GOOGLE_MAPS_API_KEY
      }
    });

    if (response.data.status === "OK") {
      const result = response.data.results[0];
      const location = result.geometry.location;
      res.send(location);
    } else {
      res.status(404).send({ error: "Geocoding falhou", status: response.data.status });
    }
  } catch (error) {
    console.error("Erro ao geocodificar:", error);
    res.status(500).send({ error: "Erro interno do servidor" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
