const fs = require('fs')

class Model {
    constructor(id, todo, task) {
        this.id = id,
            this.todo = todo,
            this.task = task
    }

    static list() {
        let data = fs.readFileSync('./data.json', 'utf-8')
        data = JSON.parse(data)
        let result = []
        data.forEach(el => {
            result.push(new Model(el.id, el.todo, el.task))
        });
        return result
    }

    static add(task) {
        let data = this.list()
        let id
        if (data.length == 0) {
            id = 1
        } else {
            id = data[data.length - 1].id + 1
        }
        let newData = new Model(id, '[ ]', task.join(' '))
        data.push(newData)
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4))
        return newData
    }

    static findById(id) {
        let data = this.list()
        let dataById
        data.forEach(el => {
            if (el.id == id[0]) {
                dataById = el
            }
        });
        return dataById
    }

    static delete(id) {
        let data = this.list()
        let dataDeleted
        let newData = []
        data.forEach(el => {
            if (el.id == id[0]) {
                dataDeleted = el
            } else {
                newData.push(el)
            }
        });
        fs.writeFileSync('./data.json', JSON.stringify(newData, null, 4))
        return dataDeleted
    }

    static complete(id) {
        let data = this.list()
        data.forEach(el => {
            if (el.id == id[0]) {
                el.todo = '[X]'
            }
        });
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4))
        return data
    }

    static uncomplete(id) {
        let data = this.list()
        data.forEach(el => {
            if (el.id == id[0]) {
                el.todo = '[ ]'
            }
        });
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4))
        return data
    }
}

module.exports = Model