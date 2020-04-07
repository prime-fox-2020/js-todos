const Model = require('../model/Model')

class View {
    static help() {
        console.log("node todo.js ")
        console.log("node todo.js help")
        console.log("node todo.js list")
        console.log("node todo.js add <task_content>")
        console.log("node todo.js findById <task_content>")
        console.log("node todo.js delete <task_content>")
        console.log("node todo.js complete <task_content>")
        console.log("node todo.js uncomplete <task_content>")
    }
    static list(tasks){
        console.log("Your To Do Lists :")
        for(let i=0;i<tasks.length;i++){
            if(tasks[i].status==false)
                console.log(`${tasks[i].task_id}. [ ] ${tasks[i].task}`)
            else
                console.log(`${tasks[i].task_id}. [x] ${tasks[i].task}`)
            
        }
    }
    static add(params){
        console.log(`Added "${params}" to your To Do List...`)

    }
    static findById(id){
        // console.log(id)
        console.log(`${id.task_id}. ${id.task}`)
    }
    static delete(id){
        console.log(`Task Id number : ${id} has been deleted...`)

    }
    static complete(id){
        console.log(`Task Id number : ${id} has been changed...`)
        
    }
    static uncomplete(id){
        console.log(`Task Id number : ${id} has been changed...`)
        
    }
    static message(msg){
        console.log("Tidak ada command seperti itu!!", msg)
    }
}

module.exports = View
