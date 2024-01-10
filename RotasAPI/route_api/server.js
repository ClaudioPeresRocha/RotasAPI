const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fileHandler = require('./controllers/fileHandler'); // Controlador para lidar com o arquivo

const app = express();
app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), fileHandler);

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
