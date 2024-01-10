const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'r00t',
  database: 'rotas'
});

// Função para obter uma conexão do pool
const getConnection = (callback) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
        return callback(err, null);
      }
      callback(null, connection);
    });
  };
  module.exports = { getConnection };
