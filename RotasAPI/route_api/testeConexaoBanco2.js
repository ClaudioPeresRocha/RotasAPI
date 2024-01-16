
const db_conn = require('./models/db');

class teste{
    async listaCidades(){
        const conn = await db_conn.connect();
        const [rows] = await conn.query('SELECT * FROM cidade');
        console.log(rows)
        return rows

    }
}

module.exports = new teste();