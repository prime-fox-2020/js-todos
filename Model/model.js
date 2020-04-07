const Controller = require('../Controller/controller.js')

class Model {
    constructor(id, task, status) {
        this.id = id
        this.task = task
        this.status = status
    }

    static kosong() {
        let pesanKosong = '$ node todo.js help'
        return pesanKosong
    }

    static help() {
        let helpArray = [
            '$ node todo.js',
            '$ node todo.js help',
            '$ node todo.js list',
            '$ node todo.js add <task_content>',
            '$ node todo.js findById <task_id>',
            '$ node todo.js delete <task_id>',
            '$ node todo.js complete <task_id>',
            '$ node todo.js uncomplete <task_id>'
        ]
        return helpArray
    }

    static list() {
        const fs = require("fs")
        let data = fs.readFileSync('./data.json', 'utf8')
        let jsonData = JSON.parse(data)
        let todos = []
        for (let i = 0; i < jsonData.length; i++) {
            todos.push(new Model(jsonData[i].id, jsonData[i].task, jsonData[i].status))
        }
        return todos
    }

    static add(addTask) {
        let todos = this.list()
        if (addTask) {
            let newObj = {
                "id": todos[todos.length - 1].id + 1,
                "task": addTask,
                "status": "[ ]"
            }
            todos.push(new Model(newObj.id, newObj.task, newObj.status)) 
            const fs = require("fs")
            fs.writeFileSync('./data.json', JSON.stringify(todos, null, 3))
            return todos           
        }
    }

    static findById(findIdCommand) {
        let todos = this.list()
        findIdCommand = Number(findIdCommand)
        if (findIdCommand) {
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].id === findIdCommand) {
                    let pesan = `${todos[i].id}. ${todos[i].task} status: ${todos[i].status}`
                    return pesan
                }
            }
        }
    }

    static delete(delCommand) {
        let todos = this.list()
        delCommand = Number(delCommand)
        if (delCommand) {
            let pesan = null
            let updatedTodos = []
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].id === delCommand) {
                    pesan = `berhasil menghapus list ${todos[i].id}. ${todos[i].task} status: ${todos[i].status}`
                } else if (todos[i].id !== delCommand) {
                    updatedTodos.push(todos[i])
                }
            }
            const fs = require("fs")
            fs.writeFileSync('./data.json', JSON.stringify(updatedTodos, null, 3))
            return pesan
        }
    }

    static complete(idRequested) {
        let todos = this.list()
        idRequested = Number(idRequested)
        let pesan = null
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === idRequested) {
                todos[i].status = "[X]"
                pesan = `list dengan id ${todos[i].id} telah di check`
            }
        }
        const fs = require("fs")
        fs.writeFileSync('./data.json', JSON.stringify(todos, null, 3))
        let datas = [todos, pesan]
        return datas
    }

    static uncomplete(idRequested) {
        let todos = this.list()
        idRequested = Number(idRequested)
        let pesan = null
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === idRequested) {
                todos[i].status = "[ ]"
                pesan = `list dengan id ${todos[i].id} telah di uncheck`
            }
        }
        const fs = require("fs")
        fs.writeFileSync('./data.json', JSON.stringify(todos, null, 3))
        let datas = [todos, pesan]
        return datas
    }


}

module.exports = Model 