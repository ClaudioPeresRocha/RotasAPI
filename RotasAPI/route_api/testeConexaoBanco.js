const db = require('./models/db');

db.getConnection((err, connection) => {
  if (err) {
    // Tratar erro
    return;
  }

  connection.query('SELECT * FROM cidade', (error, results, fields) => {
    // Sempre libere a conexão de volta para o pool após o uso
    connection.release();

    if (error) {
      // Tratar erro
      return;
    }

    // Usar os resultados da consulta
    console.log(results);
  });
});
