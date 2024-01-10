const xlsx = require('xlsx');
const db = require('../models/db'); // Módulo de conexão com o banco de dados

module.exports = async (req, res) => {
  try {
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

    const registrosParaInserir = [];

    // Pular a primeira linha (cabeçalhos) e processar os dados
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      // Inserir no banco de dados (implementar lógica de inserção)
      let registro = [
                row[0], 
                row[1],
                row[2],
                row[3],
                row[4],
                row[5],
                row[6],
                row[7],
                row[8],
                row[9],
                row[10],
                row[11],
                row[12],
                row[13],
                row[14],
                row[15],
                row[16],
                row[17],
                row[18],
                row[19],
                row[20],
                row[21]                
                ];

                registrosParaInserir.push(registro)

      
    }
   
    db.getConnection((err, connection) => {
        console.log("1")
        if (err) {
          // Tratar erro de conexão
          return res.status(500).send('Erro ao conectar ao banco de dados');
        }
  
        const query = 'INSERT INTO colaborador (matricula, cpf, nome, sobrenome, estado, idCidade, bairro, endereco, numero, email, enderecoCompleto, lat, lng, dataNascimento, setor, centroCusto, telefoneContato, idTurno, cep, observacoes, status, idEmpresa) VALUES ?';
        connection.query(query, [registrosParaInserir], (error, results) => {
          connection.release();

          console.log(results)
  
          if (error) {
            return res.status(500).send('Erro ao inserir registros');
          }
  
          res.send('Todos os registros foram inseridos com sucesso');
        });
      });
    } catch (error) {
    console.log(error)
      console.error('Erro ao processar arquivo:', error);
      res.status(500).send('Erro ao processar o arquivo.');
    }
/*
    res.send('Arquivo processado com sucesso.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao processar o arquivo.');
  }*/
};
