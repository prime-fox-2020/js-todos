const Model = require('./model');
const View = require('./view');

class Controller{
    static help(){
        Model.help((data)=> {
            View.help(data);
        })
    }

    static list(){
        Model.list((err, data) => {
            if(err){
                throw err;
            }
            View.list(data);
        })
    }

    static add(newTask){
        Model.add(newTask, (err, data) => {
            if(err){
                throw err;
            }
            View.add(data);
        })
    }
}

module.exports = Controller;