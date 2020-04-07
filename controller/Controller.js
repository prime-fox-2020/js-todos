const View = require('../view/View')
const Model = require('../model/Model')

class Controller {
    static help() {
        View.help()
    }
    static list(){
        let tasks = Model.list()
        View.list(tasks)
    }
    static add(params){
        Model.add(params)
        View.add(params)
    }
    static findById(params){
        let found = Model.findById(params)
        View.findById(found)
    }
    static delete(params){
        Model.delete(params)
        View.delete(params)
    }
    static complete(id){
        Model.complete(id)
        View.complete(id)
    }
    static uncomplete(id){
        Model.uncomplete(id)
        View.uncomplete(id)
        
    }
    static message(msg){
        View.message(msg)
    }
}

module.exports = Controller