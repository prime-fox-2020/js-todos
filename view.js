
class View{
    static viewHelp(){
        console.log(`
            node todo.js
            node todo.js help
            node todo.js list
            node todo.js add <task_content>
            node todo.js findById <task_id>
            node todo.js delete <task_id>
            node todo.js complete <task_id>
            node todo.js uncomplete <task_id>
            node todo.js list:created asc|desc
            node todo.js list:completed asc|desc`
        )
    }
    static viewData(data){
        console.log('To-Do List anda hari ini')
        for (let i = 0; i<data.length; i++){
            if (data[i].status == true){
                console.log(`${data[i].id}. [X] ${data[i].name} date : ${data[i].create_at}`)
            } else {
                console.log(`${data[i].id}. [ ] ${data[i].name} date: ${data[i].create_at}`)
            }
        }
    }
    static add(data,input){
        console.log(`Added ${data[data.length-1].name} to To-Do List`)
    }
    static deleteData(data){
        console.log(`Data ${data.name} has been deleted`)
    }
    static completeDataStatus(data,input){
        console.log(`Data ${data[Number(input)-1].name} has been edited to Complete`)
    }
    static uncompleteDataStatus(data,input){
        console.log(`Data ${data[Number(input)-1].name} has been edited to Uncomplete`)
    }
    static displaySuccess(msg){
        console.log(msg)
    }
    static displayError(msg){
        console.log(msg)
    }
    static showFindById(data){
        console.log(data)
    }
    static viewDataByCreate(data){
        console.log('To-Do List anda hari ini berdasarkan waktu pembuatan')
        for (let i = 0; i<data.length; i++){
            if (data[i].status == true){
                console.log(`${data[i].id}. [X] ${data[i].name} date : ${data[i].create_at}`)
            } else {
                console.log(`${data[i].id}. [ ] ${data[i].name} date : ${data[i].create_at}`)
            }
        }
    }
    static viewDataByComplete(data){
        console.log('To-Do List anda hari ini berdasarkan waktu penyelesaian')
        for (let i = 0; i<data.length; i++){
            if (data[i].status == true){
                console.log(`${data[i].id}. [X] ${data[i].name} ${data[i].complete_at}`)
            }
        }
    }
}

module.exports = View