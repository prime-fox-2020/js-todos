const Model = require('./model');
const View = require('./view');

class Controller{
    static help(){
        Model.help((data)=> {
            View.help(data);
        })
    }

    static list(command){
        if(command === 'list:created'){
            Model.listCreated((err, data) => {
                if(err) {
                    throw err;
                }
                View.list(data);
            })
        } else if (command === 'list:completed'){
            Model.listCompleted((err, data) => {
                if(err) {
                    throw err;
                }
                View.list(data);
            })
        } else {
            Model.list((err, data) => {
                if(err){
                    throw err;
                }
                View.list(data);
            })
        }
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
            View.findById(data);
        })
    }

    static delete(id){
        Model.delete(id, (err, data) => {
            if(err){
                throw err;
            }
            View.delete(data);
        })
    }

    static status(command, id){
        Model.status(command, id, (err, data) => {
            if(err){
                throw err;
            }
            View.list(data);
        })
    }

    static tag(id, tag){
        Model.tag(id, tag, (err, data) => {
            if(err){
                throw err;
            }
            View.tag(data, tag);
        })
    }
}

module.exports = Controller;