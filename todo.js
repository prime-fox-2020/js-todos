let controller = require('./controller/controller.js')


let command = process.argv[2]

let input = process.argv.slice(3)

let listcommando = ['help','list','add <task_content>','find by id <task_id>', 'delete <task_id' , 
'complete <task_id' , 'incomplete <task_id']

switch(command){
    case "help":
        controller.help(listcommando)
    break;
    case "list":
        controller.show()
    break;
    case "add":
        controller.add(input[0],input[1],input[2])
    break;
    case "findById":
        controller.showById(input[0])
    break;
    case "delete":
        controller.delete(input[0])
    break;
    case "complete":
        controller.complete(input[0])
    break;
    case "incomplete":
        controller.incomplete(input[0])
    break;
    default:
        controller.help(listcommando)
    break;
}