const fs = require('fs') 
let data = fs.readFileSync('./data.json','utf-8')
data = JSON.parse(data)
class Model {

    static formatDate() {
        let formatDate = new Date()
        let year = formatDate.getFullYear()
        let month = formatDate.getMonth()
        let day = formatDate.getDate()
        if(month < 10){
            month = '0' + month
        }
        if(day < 10){
            day = '0' + day
        }
        let res = `${day}-${month}-${year}`
        return res
    }

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
        let date = Model.formatDate()
        data.push({
            id : data.length+1,
            status : '[ ]',
            task : task,
            created_date: date,
            completed_date: "",
            tag: ""
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
        let date = Model.formatDate()
        data[id-1].status = '[X]'
        data[id-1].completed_date = date
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4), 'utf-8')
        return data
    }

    static uncomplete(id) {
        data[id-1].status = '[ ]'
        data[id-1].completed_date = ''
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4), 'utf-8')
        return data
    }

    static sortByDate(opr) {
        if(opr == 'desc') {
            data.sort((a, b) => (a.created_date < b.created_date) ? 1 : -1)
        } else {
            data.sort((a, b) => (a.created_date > b.created_date) ? 1 : -1)
        }
        return data
    }

    static listCompleted(opr) {
        let completed = []
        for(let i = 0; i < data.length; i++) {
            let check = false
            if(data[i].status !== '[X]') {
                check = true
            }
            if(!check) {
                completed.push(data[i])
            }
        }

        if(opr == 'desc') {
            completed.sort((a, b) => (a.completed_date < b.completed_date) ? 1 : -1)
        } else {
            completed.sort((a, b) => (a.completed_date > b.completed_date) ? 1 : -1)
        }
        return completed
    }

    static addTag(id, tag) {
        let res = []
        data[id-1].tag = String(tag)
        res.push(data[id-1])
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 4), 'utf-8')
        return res
    }

    static filter(opr) {
        let temp = []
        for(let i = 0; i < data.length;i ++) {
            if(data[i].tag.includes(opr)) {
                data[i].tag = data[i].tag.split(' ')
                temp.push(data[i])
            }
        }
        temp.sort((a, b) => (a.created_date > b.created_date) ? 1 : -1)
        return temp
    }

}

module.exports = Model