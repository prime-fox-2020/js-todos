const View = require('./view')
const Model = require('./model')

class Controller{
    static help(){
        const data = `node todo.js\nnode todo.js help\nnode todo.js list\nnode todo.js add <task_content>\nnode todo.js findById <task_id>\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>\nnode todo.js uncomplete <task_id>\nnode todo.js list:created <optional:asc/desc>\nnode todo.js list:completed\nnode todo.js tag <task_id> <task_tags>\nnode todo.js filter:<tag>`
        View.show(data)
    }
    static list(){
        const data = Model.readJSON()
        View.showList(data)
    }
    static add(todo){
        Model.add(todo)
        View.show(`Added \"${todo}\" to your TODO list`)
    }
    static find(id){
        const todo = Model.find(id)
        View.show(todo)
    }
    static delete(id){
        const todo = Model.delete(id)
        View.show(`Deleted "${todo} from your TODO list"`)
    }
    static complete(id){
        Model.updateComplete(id)
        const data = Model.readJSON()
        View.showList(data)
    }
    static uncomplete(id){
        Model.updateUncomplete(id)
        const data = Model.readJSON()
        View.showList(data)
    }
    static listcreated(sort){
        let data = Model.readJSON()
        data = Model.sortCreated(data, sort)
        View.showWithDateCreated(data)

    }
    static listcompleted(sort){
        let data = Model.readJSON()
        data = Model.sortCompleted(data, sort)
        View.showWithDateCompleted(data)
    }
    static tags(id, arg){
        Model.addTags(id , arg)
        const TODO = Model.findTODO(id)
        View.show(`Tagged task "${TODO}" with tags:${arg}`)

    }
    static filter(tag){
        const data = Model.filter(tag)
        View.showArray(data)
    }

    static errorMessage(msg){
        const data = View.show(msg)
        View.show(data)
    }

}

module.exports = Controller