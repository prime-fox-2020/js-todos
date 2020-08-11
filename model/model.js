let fs = require('fs')
let View = require("../view/view.js")

class Model {
    constructor(
        ){
        this.ID = 0
        this.nama = 2
        this.task = 3
        this.status = 4
        console.log(this.nama)

    }

    static data(){
    let fs = require('fs')
    let Beta = fs.readFileSync('./data/data.json','utf8')
    let Gamma = JSON.parse(Beta)

    return Gamma
    }

    static modelshow(){
    return this.data()
    }

    static add(name,jobToDo,sTatus){
        let newTasks = this.data();
        
        newTasks.push({
            ID: Number(newTasks[newTasks.length - 1].ID) + 1,
            nama: name,
            task: jobToDo,
            status: sTatus!== undefined? sTatus:'Unimportant' ,
            category: 'Unimportant', 
            createdDate: new Date ,
          })
          let tasksString = JSON.stringify(newTasks, null, 4)
          
          fs.writeFileSync('./data/data.json',tasksString)
          console.log(`Added "${jobToDo}" to your TO DO list...`)
    }

    static delete(id){
        let nonDeletedTask = []
        let deletedTask = []
        let data = this.data()
        for (let i = 0 ; i < data.length ; i ++){
            if(Number(id) !== data[i].ID){
                nonDeletedTask.push(data[i])
            }else{
                deletedTask.push(data[i])
            }
        }
        let newList = JSON.stringify(nonDeletedTask, null, 4)
          
        fs.writeFileSync('./data/data.json',newList)
        console.log(`Deleted "${deletedTask[0].task}" from your TO DO list...`)
    }

    static complete(id){
        let tasks = this.data()
        for (let i = 0; i < tasks.length; i++){
            if (Number(id) == tasks[i].ID){
                tasks[i].status = 'Completed'
            }
        }
        let newList = JSON.stringify(tasks, null, 4)  
        fs.writeFileSync('./data/data.json',newList)
        View.viewShow(tasks)
    }

    static incomplete(id){
        let tasks = this.data()
        for (let i = 0; i < tasks.length; i++){
            if (Number(id) == tasks[i].ID){
                tasks[i].status = 'Incomplete'
            }
        }
        let newList = JSON.stringify(tasks, null, 4)  
        fs.writeFileSync('./data/data.json',newList)
        View.viewShow(tasks)
    }
}

module.exports={Model}