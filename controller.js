var Views = require('./views.js')
var Model = require("./model.js")

class Controller{
    static help(){
        Views.showHelp()
    }
    static list(){
        let taskList = Model.readData()
        Views.showList(taskList)
    }
    static add(newTask){
        Model.add(newTask)
        Views.addList(newTask)
    }
    static del(id){
        Model.delete(id)
        Views.delFromList(id)
    }
    static find(id){
        let finder = Model.find(id)
        if(finder == false){
            Views.show('Id not Found')
        }else{
            Views.show(finder)
        }
    }
    static delete(id){
        Model.delete(id)
        Views.delFromList(id)

    }

    static complete(id){
        Model.complete(id)
        let newData = Model.readData()
        Views.showList(newData)
    }

    static uncomplete(id){
        Model.uncomplete(id)
        let newData = Model.readData()
        Views.showList(newData)
    }
}

module.exports = Controller
