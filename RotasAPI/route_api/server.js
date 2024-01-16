const cors = require('cors');
const multer = require('multer');
const express = require('express');
const app = express();

app.use(cors('*'));
app.use(express.json());


const PORT = process.env.PORT || 3100;

const fileHandler = require('./controllers/fileHandler'); // Controlador para lidar com o arquivo
const cidade = require('./controllers/cidadeController')





const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), fileHandler);

app.get('/selectCidade', async (req, res) => {

  const retorno = await cidade.selectCidade()  
  res.send(retorno)
  
   
})


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
