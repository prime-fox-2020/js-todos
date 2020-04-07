const Model = require('./model');
const View = require('./view');

class Controller{
    static help(){
        Model.help((data)=> {
            View.help(data)
        })
    }

    sta
}

module.exports = Controller;