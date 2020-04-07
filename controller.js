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

    static findById(id){
        Model.findById(id, (err, data) => {
            if(err){
                throw err;
            }
            View.findById(data)
        })
    }

    static delete(id){
        Model.delete(id, (err, data) => {
            if(err){
                throw err;
            }
            View.delete(data)
        })
    }
}

module.exports = Controller;