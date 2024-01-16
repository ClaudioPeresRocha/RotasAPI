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


  async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME
    }
    );
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports.connect = connect;
  module.exports = { getConnection };
