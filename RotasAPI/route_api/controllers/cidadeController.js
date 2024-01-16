const cidade = require('../models/cidadeModel')

class cidadeController{

    selectCidade(){
        //console.log('1')
        return  cidade.selectCidade()
    }
}
module.exports = new cidadeController() 