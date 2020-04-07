
class Views {
    static showHelp() {
        let arrHelp = ['help', 'list', 'add <task_content>', 'findById <task_id>', 'delete <task_id>', 'complete <task_id>', 'uncomplete <task_id>']
        for (var i = 0; i < arrHelp.length; i++) {
            console.log(`$ node todo.js ${arrHelp[i]}`)
        }
    }

    static showList(datas) {
        for (var i = 0; i < datas.length; i++) {
            if (datas[i]["checklist"] === true) {
                console.log(`${i + 1}.[X] ${datas[i].activity}`)
            } else if(datas[i]["checklist"] === false) {
                console.log(`${i + 1}.[ ] ${datas[i].activity}`)    
            }
        }
    }
    static show(datas){
        console.log(datas)
    }

    static addList(input) {
        console.log(`'${input}' added to your to do list ...`)
    }
    static delFromList(id) {
        console.log(`Deleted  task with id no. ${id}' from your to do list.. `)
    }
}
module.exports = Views

