const fs = require('fs')

class Model {
    constructor(data) {
        this.data = data
    }

    static read() {
        let data = fs.readFileSync('./data.json', 'utf8')
        data = JSON.parse(data)
        return data
    }

    static add(data) {
        let temp = Model.read()
        let newData = {
            "id": temp[temp.length - 1].id + 1,
            "task": data,
            "status": "[ ]"
        };
        temp.push(newData)
        fs.writeFileSync('./data.json', JSON.stringify(temp, null, 2), 'utf8')
        return temp
    }

    static delete(data) {
        let temp = Model.read()
        let newData = []
        let deleteData = []
        for (let a in temp) {
            if (temp[a].id != data) {
                let newData2 = {
                    "id": temp[newData.length].id,
                    "task": temp[a].task,
                    "status": [temp[a].status]
                }
                newData.push(newData2)
            } else if (temp[a].id == data) {
                deleteData.push(temp[a].task)
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(newData, null, 2), 'utf8')
        return deleteData
    }

    static complete(data) {
        let temp = Model.read()
        temp[data - 1].status = "[x]"
        fs.writeFileSync('./data.json', JSON.stringify(temp, null, 2), 'utf8')
    }

    static uncomplete(data) {
        let temp = Model.read()
        temp[data - 1].status = "[ ]"
        fs.writeFileSync('./data.json', JSON.stringify(temp, null, 2), 'utf8')
    }
}

module.exports = Model