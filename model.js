const fs = require('fs') 
let data = fs.readFileSync('./data.json','utf-8')
data = JSON.parse(data)
class Model {
    static list() { 
        return data
    }

    static findId(id) {
        let res = []
        for(let i = 0; i < data.length; i++) {
            if(data[i].id == id) {
                res.push(data[i])
            }
        }
        return res
    }

    static add(task) {
        data.push({
            id : data.length+1,
            status : '[ ]',
            task : task
        })
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4), 'utf-8')
        return data
    }

    static delete(id) {
        let deleted = []
        deleted.push(data[id-1].task)
        let res = []
        for(let i = 0; i < data.length; i++) {
            let check = false
            if(data[i].id == id) {
                check = true
            }
            if(!check) {
                data[i].id = res.length+1
                res.push(data[i])
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(res, null, 4), 'utf-8')
        return deleted
    }

    static complete(id) {
        data[id-1].status = '[X]'
        return data
    }

    static uncomplete(id) {
        data[id-1].status = '[ ]'
        return data
    }

}

module.exports = Model