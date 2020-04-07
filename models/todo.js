const fs = require('fs')

class Todo{
    constructor(task_id, task){
        this.task_id = task_id
        this.task = task
    }

    static list() {
        let fsData = fs.readFileSync('./data.json', 'utf8')
        let parsData = JSON.parse(fsData)
        
        let result = []
        for(let i=0; i<parsData.length; i++) {
            result.push(new Todo(
                parsData[i].task_id,
                parsData[i].task))
        }
        //console.log(result)
        return result
    }

    static add(datas) {
        let listData = this.list
        let newId = listData[listData.length-1].task_id+1

        let addData = []

        for(let i=0; i<listData.length; i++){
            let obj = {}
        }
    

        fs.writeFileSync('./data.json', JSON.stringify(addData, null, 4))
    }

    static findByid(id) {
        let listData = this.list()

        for(let i=0; i<listData.length; i++){
            if(Number(id) === listData[i].task_id){
                return listData[i]
            }
        }
    }
}

module.exports = Todo