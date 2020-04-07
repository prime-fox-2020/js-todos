const View = require('../view/View')
const Model = require('../model/Model')

class Controller {
    static help() {
        View.help()
    }
    static list(command,params){
        let tasks = Model.list(command,params)
        console.log(tasks)
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
    static tags(id,tag){
        Model.tags(id,tag)
        View.tags(tag)   
     }
    static filter(tag){
       let filtered= Model.filter(tag)
        View.list(filtered)   
    }
    static message(msg){
        View.message(msg)
    }
}

module.exports = Controller