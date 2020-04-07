class View{
    static help(){
        console.log('$ node todo.js');
        console.log('$ node todo.js help');
        console.log('$ node todo.js list');
        console.log('$ node todo.js add <task_content>');
        console.log('$ node todo.js findById <task_id>');
        console.log('$ node todo.js delete <task_id>');
        console.log('$ node todo.js complete <task_id>');
        console.log('$ node todo.js uncomplete <task_id>');
    }

    static list(arr){
        for (let key of arr) {
            console.log(`${key.Id}. ${key.task}`)
        }
    }

    static add(str){
        console.log(`Added ${str} to your TODO list`)
    }

    static findById(id){
        console.log(id)
    }
    static delete(str){
        console.log(`Deleted ${str} from your TODO list...`)
    }
    static complete(arr){
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].complete == true){
                console.log(`${arr[i].Id}. [X] ${arr[i].task}`)
            }else{
                console.log(`${arr[i].Id}. [ ] ${arr[i].task}`)
            }
            
        }
    }
    
}
module.exports = View