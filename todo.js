let controller = require('./controller')
let argv = process.argv.slice(2)

let command = []

if (argv[0]){
    command = argv[0].split(':')
}else{
    command[0] = argv[0]
}

switch(command[0]){
    case 'help' || null || undefined:
        controller.getHelp()
        break
    case 'list':
        if(command.length < 2){
            controller.list()
        }else{
            if(cli[1] === 'complete'){
                controller.listComplete(argv[1])
            }else if(cli[1] === 'created'){
                controller.listCreated(argv[1])
            }else if(cli[1] === 'outstanding'){
                controller.listUncomplete(argv[1])
            }else{
                controller.getHelp()
            }
        }
        break
    case 'add':
        controller.addTask(argv[1])
        break
    case 'findById':
        controller.findById(argv[1])
        break
    case 'delete':
        controller.delete(argv[1])
        break
    case 'complete':
        controller.completeTask(argv[1])
        break
    case 'uncomplete':
        controller.uncompleteTask(argv[1])
        break
    case 'tag':
        taskController.addTag(argv.slice(1))
        break
    default:
        controller.getHelp()
        break
}