const Todo = require('../models/todo.js')
const View = require('../views/view')

class Controller{
   
    static help() {
        View.help()
    }

    static list() {
        let listData = Todo.list()
        //return listData
        View.list(listData)
    }

    static findById(id) {
        let findId = Todo.findByid(id)
        View.findById(findId)
    }

    static delete(id) {
        let data = Todo.delete(id)
        View.delete(data)
    }

    static complete(id) {
        let data = Todo.complete(id)
        View.complete(data)
        return this.list()
    }

    static uncomplete(id) {
        let data = Todo.uncomplete(id)
        View.uncomplete(data)
        return this.list()
    }

    static add(datas) {
        Todo.add(datas)
        View.add(datas)
    }

    static listcomplete(data){
        let datas = Todo.liscomplete(data)
        View.listcomplete(datas)
    }

    static tag(id, tag) {
        Todo.tag(id, tag)
        View.tag(tag)
    }
    // static msg() {
    //     View.msg()
    // }

}

module.exports = Controller