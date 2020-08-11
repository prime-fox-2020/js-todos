let fs = require('fs')
let data = JSON.parse(fs.readFileSync('./data.json','utf8'))
// console.log(data)

class Model{
    constructor(id,activity,status){
        this.id = id
        this.activity = activity
        this.checklist = status
    }
    static readData(){
        let taskList = [];
        for(var i = 0 ; i <data.length;i++){
            taskList.push(new Model(i+1, data[i].activity, data[i].checklist))
        }
        return taskList
    }
    
    static add(newData){
        let taskList = this.readData()
        taskList.push({"id" :taskList.length+1,"activity":newData,"checklist":false})
        fs.writeFileSync('./data.json',JSON.stringify(taskList,null,2))
    }

    static find(idFind){
        let taskList = this.readData()
        let idFinder
        for(var i = 0 ; i <taskList.length; i++){
            if(taskList[i].id == idFind){
                if(taskList[i].checklist == true ){
                    idFinder = `${taskList[i].id}.[X] ${taskList[i].activity}`
                    
                }else if(taskList[i].checklist == false){
                    idFinder = `${taskList[i].id}.[ ] ${taskList[i].activity}`
                    
                }
            }   
        }
        return idFinder
    }
    static delete(idDelete){
        let deleted 
        let newId = 0
        let update =[]
        let taskList = this.readData()
        for(var i = 0; i<taskList.length;i++){
            if(taskList[i].id == idDelete){
                deleted = taskList[i]
                newId=i
            }else{
                update.push(taskList[i])
            }
        }

        //loop utk update id 
        for(var j = newId;j<update.length;j++){
            update[j].id-- 
        }
        fs.writeFileSync('./data.json',JSON.stringify(update,null,2))
    }

    static complete(id){
        let taskList = this.readData()
        for(var i = 0 ; i< taskList.length; i++){
            if(id == taskList[i].id){
                taskList[i].checklist = true 
            }
        }
        fs.writeFileSync('./data.json',JSON.stringify(taskList,null,2))
    }

    static uncomplete(id){
        let taskList=this.readData()
        for(var i = 0 ; i<taskList.length;i++){
            if(id == taskList[i].checklist){
                taskList[i].checklist = false;
            }
        }
        fs.writeFileSync('./data.json',JSON.stringify(taskList,null,2))
    }
}

module.exports = Model