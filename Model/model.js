const fs = require('fs')

class Todo {
    constructor(id, input, status = false, createdAt, completed_date = '', tag = []){
        this.id = id
        this.input = input
        this.status =  status
        this.createdAt = new Date(createdAt)
        this.completed_date = completed_date
        this.tag = tag
    }

    static showList(){
        const datas = JSON.parse(fs.readFileSync('./data.json','utf8'))
        let result =[]
        for(let i = 0; i < datas.length; i++){
            result.push(new Todo(datas[i].id, datas[i].input, datas[i].status, datas[i].createdAt, datas[i].completed_date, datas[i].tag))
        }
        return result
    }


    static save(data){
        fs.writeFileSync('./data.json',JSON.stringify(data, null, 4))
    }
    

    static add(input){
        let datas = this.showList()
        let getId = datas.length + 1
        datas.push(new Todo(getId, input.toString(), this.status, new Date()))

        let result = []
        for(let i = 0; i < datas.length; i++){
            let obj = {}
            obj.id = datas[i].id
            obj.input = datas[i].input
            obj.status = datas[i].status
            obj.createdAt = datas[i].createdAt
            obj.completed_date = datas[i].completed_date
            obj.tag = datas[i].tag
            result.push(obj)
        }
        this.save(result)
    }

    static findById(input){
        let datas  = this.showList()
        for(let i = 0; i < datas.length; i++){
            if(Number(input) === datas[i].id){
                return datas[i]
            } 
        }
    }

    static delete(id){
        let datas  = this.showList()
        let obj = {}
        let data = []
        for(let i = 0; i < datas.length; i++){
            if(Number(id) !== datas[i].id){
                obj = {}
                obj.id = datas[i].id
                obj.input = datas[i].input
                obj.status = datas[i].status
                obj.createdAt = datas[i].createdAt
                obj.completed_date = datas[i].completed_date
                obj.tag = datas[i].tag
                data.push(obj)
            }
        }
        this.save(data)
    }

    static complete(id){
        let datas = this.showList()
        datas[Number(id) - 1].status = true
        datas[Number(id) - 1].completed_date = new Date()
        this.save(datas)
    }

    static uncomplete(id){
        let datas = this.showList()
        datas [Number(id) - 1].status = false
        this.save(datas)
    }

    static createdAt(sort){
        let datas = this.showList()
        let newData
        if (sort == 'asc') {
            newData = datas.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        } else if (sort == 'desc') {
            newData = datas.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        } else {
            newData = datas
        }
        return newData
    }

    static completed_date(sort){
        let datas = this.showList()
        let complete = []
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].status === true) {
                complete.push(datas[i])
            }
        }
        let newData;
        if (sort == 'asc') {
            newData = complete.sort((a,b) => new Date(a.completed_date) - new Date(b.completed_date))
        } else if (sort == 'desc') {
            newData = complete.sort((a,b) => new Date(b.completed_date) - new Date(a.completed_date))
        } else {
            newData = complete
        }
        return newData
    }

    static tags(id, arr) {
        let datas = this.showList()
        for (let i = 0; i < arr.length; i++) {
            datas[Number(id) - 1].tag.push(arr[i])
        }
        this.save(datas)
    }

    static filter(tag){
        let datas = this.showList()
        let result = []
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].tag.includes(tag[0])) {
                result.push(datas[i])
            }
        }
        return result
    }
}


module.exports = Todo