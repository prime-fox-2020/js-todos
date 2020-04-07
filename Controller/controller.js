const Model = require('../Model/model')
const View = require('../View/view')

class Controller {
    static showHelp() {
        View.message('Please add your Command:')
        View.showHelp()
    }
    static showList(){
        let tasks = Model.showList()
        View.showList(tasks)
    }
    static add(input){
        Model.add(input)
        View.message(`Added "${input}" to your todo list...`)
    }
    static findById(input){
        let find = Model.findById(input)
        View.findById(find)
    }
    static delete(id){
        Model.delete(id)
        View.message(`Deleted id number : "${id}" from your todo list`)
    }
    static complete(id){
        Model.complete(id)
        View.message(`Task id number : ${id} has been changed`)
    }
    static uncomplete(id){
        Model.uncomplete(id)
        View.message(`Task id number : ${id} has been changed`)        
    }
}

module.exports = Controller