const db_conn = require('../config/db_connection')

class cidadeModel{
    async selectCidade(){
    
    const conn = await db_conn.connect();

    let vSQL = 'Select nome as label, id as value From Cidade'
    
        /*
        console.log('listBudget: ' + vSQL)
        console.log(pVersion)
        */
    try {
        const [rows] = await conn.query(vSQL)
        //console.log(rows)
        return rows
    } catch (error) {
        console.log("Erro 1: " + error)
    }
}

}module.exports = new cidadeModel();