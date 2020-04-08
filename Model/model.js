const Controller = require('../Controller/controller.js')

class Model {
    constructor(id, task, status, created_date, completed_date, tag) {
        this.id = id
        this.task = task
        this.status = status
        this.created_date = new Date(created_date)
        this.completed_date = completed_date
        this.tag = tag
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
            '$ node todo.js uncomplete <task_id>',
            '$ node todo.js list:created asc|desc',
            '$ node todo.js list:completed asc|desc',
            '$ node todo.js tag <task_id> <tag_name_2> ... <tag_name_N>',
            '$ node todo.js filter:<tag_name>'
        ]

        return helpArray
    }

    static list() {
        const fs = require("fs")
        let data = fs.readFileSync('./data.json', 'utf8')
        let jsonData = JSON.parse(data)
        let todos = []
        for (let i = 0; i < jsonData.length; i++) {
            todos.push(new Model(jsonData[i].id, jsonData[i].task, jsonData[i].status, jsonData[i].created_date, jsonData[i].completed_date, jsonData[i].tag))
        }
        return todos
    }

    static add(addTask) {
        let todos = this.list()
        if (addTask) {
            let newObj = {
                "id": todos[todos.length - 1].id + 1,
                "task": addTask,
                "status": "[ ]",
                "created_date": new Date(),
                "completed_date": "",
                "tag": []
            }
            todos.push(new Model(newObj.id, newObj.task, newObj.status, newObj.created_date, newObj.completed_date, newObj.tag)) 
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
                todos[i].completed_date = new Date()
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
                todos[i].completed_date = ""
                pesan = `list dengan id ${todos[i].id} telah di uncheck`
            }
        }
        const fs = require("fs")
        fs.writeFileSync('./data.json', JSON.stringify(todos, null, 3))
        let datas = [todos, pesan]
        return datas
    }

    static createdDate(cmd) {
        let todos = this.list()
        if (!cmd) {
            let sortedTodo = todos.sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
            return sortedTodo
        } else if (cmd === 'asc') {
            let sortedTodo = todos.sort((a, b) => new Date(a.created_date) - new Date(b.created_date))
            return sortedTodo
        } else if (cmd === 'desc') {
            let sortedTodo = todos.sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
            return sortedTodo
        }
    }

    static completedDate(cmd) {
        let todos = this.list()
        let checkedTodos = []
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].status == "[X]") {
                checkedTodos.push(todos[i])
            }
        }
        
        if (!cmd) {
            let sortedTodo = checkedTodos.sort((a, b) => new Date(b.completed_date) - new Date(a.completed_date))
            return sortedTodo
        } else if (cmd === 'asc') {
            let sortedTodo = checkedTodos.sort((a, b) => new Date(a.completed_date) - new Date(b.completed_date))
            return sortedTodo
        } else if (cmd === 'desc') {
            let sortedTodo = checkedTodos.sort((a, b) => new Date(b.completed_date) - new Date(a.completed_date))
            return sortedTodo
        }
    }

    static tag(inputArr) {
        let todos = this.list()        
        let id = Number(inputArr[0])
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                
                for (let j = 1; j < inputArr.length; j++) {
                    todos[i].tag.push(inputArr[j])
                }
                const fs = require("fs")
                fs.writeFileSync('./data.json', JSON.stringify(todos, null, 3))
                let pesan = `Berhasil Menandai task "${todos[i].task}" dengan tags: ${todos[i].tag.join(" ")}`
                return pesan
            }
        }
    }

    static filter(tags) {        
        let todos = this.list()
        let filters = []
        for (let i in todos) {
            if (todos[i].tag.includes(tags[0])) {
                filters.push(todos[i])
            }
        }
        return filters
    }

}

module.exports = Model 