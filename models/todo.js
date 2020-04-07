const fs = require('fs')

class Todo{
    constructor(task_id, task, status, tag){
        this.task_id = task_id
        this.task = task
        this.status = status
        this.tag = []
    }

    static list() {
        let fsData = fs.readFileSync('./data.json', 'utf8')
        let parsData = JSON.parse(fsData)
        
        let result = []
        for(let i=0; i<parsData.length; i++) {
            result.push(new Todo(
                parsData[i].task_id,
                parsData[i].task,
                parsData[i].status,
                parsData[i].tag))
        }
        //console.log(result)
        return result
    }

    static findByid(id) {
        let listData = this.list()

        for(let i=0; i<listData.length; i++){
            if(Number(id) === listData[i].task_id){
                return listData[i]
            }
        }
    }

    static delete(id) {
        let listData = this.list()
        let deleteData = []
        for(let i=0; i<listData.length; i++){
            if(Number(id) !== listData[i].task_id) {
                deleteData.push(listData[i])
            }
        }

        fs.writeFileSync('./data.json', JSON.stringify(deleteData, null, 4))
        return deleteData
    }

    static complete(id) {
        let listData = this.list()

        listData[Number(id)-1].status = true

        fs.writeFileSync('./data.json', JSON.stringify(listData, null, 4))
    }

    static uncomplete(id) {
        let listData = this.list()

        listData[Number(id)-1].status = false

        fs.writeFileSync('./data.json', JSON.stringify(listData, null, 4))
    }

    static add(datas) {
        let listData = this.list()
        
        let addObj = {
            "task_id" : listData[listData.length -1].task_id + 1,
            "task" : datas,
            "status" : false
        }
        listData.push(new Todo(addObj.task_id, addObj.task, addObj.status))
        fs.writeFileSync('./data.json', JSON.stringify(listData, null, 2))
        return listData
    }

    static liscomplete(data) {
        let listData = this.list()
        let result = []

        for(let i=0; i<listData.length; i++) {
            if(listData[i].status === true){
                result.push(listData[i])
            }
        }
        return result
    }

    static createdate(sort) {
        let listData = this.list()

    }

  
}

module.exports = Todo