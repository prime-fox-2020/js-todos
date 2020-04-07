const fs = require('fs')

class Model {
    constructor(id, todo, task, created_date, completed_date, tag) {
        this.id = id
        this.todo = todo
        this.task = task
        this.created_date = new Date(created_date)
        this.completed_date = '' || new Date(completed_date)
        this.tag = tag || []
    }

    static list() {
        let data = fs.readFileSync('./data.json', 'utf-8')
        data = JSON.parse(data)
        let result = []
        data.forEach(el => {
            result.push(new Model(el.id, el.todo, el.task, el.created_date, el.completed_date, el.tag))
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
        let newData = new Model(id, '[ ]', task.join(' '), new Date())
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
                el.completed_date = new Date()
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
                el.completed_date = ''
            }
        });
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4))
        return data
    }

    static created_date(sort) {
        let data = this.list()
        let newData
        if (sort == 'asc') {
            newData = data.sort((a, b) => new Date(a.created_date) - new Date(b.created_date))
        } else if (sort == 'desc') {
            newData = data.sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
        } else {
            newData = data
        }
        return newData
    }

    static completed_date(sort) {
        let data = this.list()
        let dataCompleted = []
        data.forEach(el => {
            if (el.todo == '[X]') {
                dataCompleted.push(el)
            }
        });
        console.log('dataCompleted: ', dataCompleted);
        let newData
        if (sort == 'asc') {
            newData = dataCompleted.sort((a, b) => new Date(a.completed_date) - new Date(b.completed_date))
        } else if (sort == 'desc') {
            newData = dataCompleted.sort((a, b) => new Date(b.completed_date) - new Date(a.completed_date))
        } else {
            newData = dataCompleted
        }
        return newData
    }

    static tag(cmd) {
        let id = cmd[0]
        let tag = cmd
        let data = this.list()
        let dataTag
        data.forEach(el => {
            if (el.id == id) {
                tag.forEach(elm => {
                    if (el.tag.includes(elm)) {
                    } else {
                        el.tag.push(elm)
                    }
                });
                dataTag = el
            }
        });
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4))
        return dataTag
    }

    static filter(cmd) {
        let data = this.list()
        let dataFilter = []
        data.forEach(el => {
            if (el.tag.includes(cmd[0])) {
                dataFilter.push(el)
            }
        });
        return dataFilter
    }
}

module.exports = Model