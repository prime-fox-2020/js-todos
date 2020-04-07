const View = require('../view/View')

class Task {
    constructor(task_id,task,status,tag,created_at,completed_at){
        this.task_id = task_id
        this.task = task
        this.status =  status
        this.tag = tag || []
        this.created_at =created_at || new Date(Date.now())
        this.completed_at = completed_at || null
    }

    static list(command,params){
        const fs = require('fs')
        const data = fs.readFileSync('./data.json','utf8')
        const parseData = JSON.parse(data)
        let resultData =[]
        for(let i=0;i<parseData.length;i++){
            resultData.push(new Task(parseData[i].task_id,parseData[i].task,parseData[i].status,parseData[i].tag,parseData[i].created_at, parseData[i].completed_at))
        }
        return resultData
    }

    static save(data){
        const fs = require('fs')
        fs.writeFileSync('./data.json',JSON.stringify(data,null,2))
    }
    
    static add(params){
        let tasks=this.list()
        let getId = tasks.length+1
        tasks.push(new Task(getId,params.join(' '),false))

        this.save(tasks)
    }
    static findById(id){
        let tasks = this.list()
        for(let i=0;i<tasks.length;i++){
            if(Number(id) === tasks[i].task_id){
                return tasks[i]
            } 
        }
    }
    static delete(id){
        let tasks = this.list()
        let obj={}
        let data =[]
        let x=1
        for(let i=0;i<tasks.length;i++){
            if(Number(id) !== tasks[i].task_id){
                obj={}
                obj.task_id = x
                obj.task = tasks[i].task
                obj.status = tasks[i].status
                data.push(obj)
                x++
            }
        }
        this.save(data)
    }
    static complete(id){
        let tasks = this.list()
        tasks[Number(id)-1].status=true
        
        this.save(tasks)
    }
    static uncomplete(id){
        let tasks = this.list()
        tasks[Number(id)-1].status=false

        this.save(tasks)
    }
    static tags(id,arrayTags){
        let tasks = this.list()
        arrayTags.forEach(element => {
            tasks[Number(id)-1].tag.push(element)
        });
        
        this.save(tasks)
    }
    static filter(tags){

    }
}

module.exports = Task