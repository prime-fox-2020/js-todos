class View{
    static help(){
        let helper = [
            'node todo.js',
            'node todo.js help',
            'node todo.js list',
            'node todo.js add <task_content>',
            'node todo.js findById <task_id>',
            'node todo.js delete <task_id>',
            'node todo.js complete <task_id>',
            'node todo.js uncomplete <task_id>',
            'node todo.js list: created asc | desc',
            'node todo.js list: completed asc | desc',
            'node todo.js tag',
            'node todo.js filter'
        ]
        console.log('Silahkan memilih command berikut:')
        for (let i of helper) {
            console.log(i)
        }
        return 'Terimakasih'
    }

    static list(data){
        if(data.length === 0){
            return 'no to-do list'
        }
        console.log("To-do list:")
        for(let i = 0; i < data.length; i++){
            if(!data[i].status){
                console.log(`${data[i].task_id}.[ ], ${data[i].task}`)
            }else{
                console.log(`${data[i].task_id}.[X], ${data[i].task}`)   
            }
        }
    }

    static showByID(data){
        console.log(`task_id: ${data.task_id}, task: ${data.task}`)
    }

    static showMessage(input){
        console.log(input)
    }
}

module.exports = View