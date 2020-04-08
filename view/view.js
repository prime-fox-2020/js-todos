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
        console.log(data)
        console.log('Data berhasil di Show')
    }

        
}

module.exports = View;