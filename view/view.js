class View {
    static viewHelp(){
        let listcommands = ['help','list','add <task_content>',
        'find by id <task_id>', 'delete <task_id>' , 
        'complete <task_id>' , 'uncomplete <task_id>']
        for (var i = 0 ; i < listcommands.length ; i++){
        console.log(`node todo.js ${listcommands[i]}`)
        }
    }
    
    static viewShow(data){
        for (let i = 0; i < data.length; i++){
            if (data[i].status == 'Completed'){
                console.log(`${data[i].ID}. [x] ${data[i].task}`)   
            } else {
                console.log(`${data[i].ID}. [ ] ${data[i].task}`)   
            }
        }
    }

    static viewShowById(data, index){
        if (data[index].status == 'Completed'){
            console.log(`${index}. [x] ${data[index-1].task}`)
        } else {
            console.log(`${index}. [ ] ${data[index-1].task}`)
        }
    }
}

module.exports = View;