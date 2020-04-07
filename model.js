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
            task : task
        })
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4), 'utf-8')
        return data
    }

    static delete(id) {
        let res = []
        console.log(res)
        res.push(data[id-1])
        for(let i = 0; i < data.length; i++) {
            if(data[i].id == id) {
                res.push(data[i])
                delete data[i]
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4), 'utf-8')
        return res
    }

}

module.exports = Model