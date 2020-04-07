const View = require('../view/View')

class Model {
    constructor(task_id,task,status){
        this.task_id = task_id
        this.task = task
        this.status =  status
    }

    static list(){
        const fs = require('fs')
        const data = fs.readFileSync('./data.json','utf8')
        const parseData = JSON.parse(data)
        let resultData =[]
        for(let i=0;i<parseData.length;i++){
            resultData.push(new Model(parseData[i].task_id,parseData[i].task,parseData[i].status))
        }
        return resultData
    }

    static save(data){
        fs.writeFileSync('./data.json',JSON.stringify(data,null,2))
        
    }
    
    static add(params){
        let tasks=this.list()
        let getId = tasks.length+1
        tasks.push(new Model(getId,params.toString(),false))

        let resultData = []
        let changeToObj = {}
        for(let i=0;i<tasks.length;i++){
            changeToObj={}
            changeToObj.task_id = tasks[i].task_id
            changeToObj.task = tasks[i].task
            changeToObj.status = tasks[i].status
            resultData.push(changeToObj)
        }

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
        const fs = require('fs')
        fs.writeFileSync('./data.json',JSON.stringify(data,null,2))
    }
    static complete(id){
        let tasks = this.list()
        tasks[Number(id)-1].status=true
        
        const fs = require('fs')
        fs.writeFileSync('./data.json',JSON.stringify(tasks,null,2))
    
        
    }
    static uncomplete(id){
        let tasks = this.list()
        tasks[Number(id)-1].status=false

        const fs = require('fs')
        fs.writeFileSync('./data.json',JSON.stringify(tasks,null,2))
        
    }
}

module.exports = Model