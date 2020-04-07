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

    // static add() {
    //     let addData = Todo.add()
    //     View.add(addData)
    // }

    static findById() {
        let findId = Todo.findByid()
        View.findById(findId)
    }
}

module.exports = Controller