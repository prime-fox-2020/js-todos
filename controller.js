let todo = require('../models');
let view = require('../views');

class Controller{

    static getHelp(){
        view.help()
    }


    static list(){
        let list = todo.findAll()
        view.list(list)
    }


    static addTask(input) {
        todo.addTask(input)
        view.showMessage(`${input} has been added`)
    }


    static findById(id){
        let data = todo.findOne(Number(id));
        if(!data){
            view.showMessage(`ID ${id}: not found`)
        }else{
            view.showByID(data)
        }
    }


    static delete(id){
        let taskWillBeDeleted = todo.delete(Number(id))
        if(!taskWillBeDeleted){
            view.showMessage(`ID ${id}: not found`)
        }else{
            view.showMessage(`${taskWillBeDeleted} has been deleted`)
        }
    }


    static completeTask(id){
        todo.checking(Number(id))
        let list = todo.findAll()
        view.list(list)
    }


    static uncompleteTask(id){
        todo.unchecking(Number(id))
        let list = todo.findAll()
        view.list(list)
    }


    static listCreated(){
        let list = todo.findAll()
        if(input === 'desc'){
            view.list(list)
        }else{
            list.reverse()
            view.list(list)
        }
    }


    static listComplete(input){
        let list = todo.findComplete()
        if(input === 'desc'){
            view.list(list)
        }else{
            list.reverse()
            view.list(list)
        }
    }


    static listUncomplete(input){
        let list = todo.findUncomplete()
        if(input === 'desc'){
            view.list(list)
        }else{
            list.reverse()
            view.list(list)
        }
    }


    static addTag(input){
        let id = input[0]
        let tag = input.slice(1)
        let data = todo.addTag(Number(id), tag)
        view.showMessage(`${data[1].join(' ')} has been tagged to ${data[0]}`)
    }


    static filter(tag){
        let filtered = todo.filtered(tag)
        if (filtered.length === 0){
            view.showMessage(`There is no task with tag ${tag}`)
        }else{
            view.list(filtered)
        }
    }
}

module.exports = Controller