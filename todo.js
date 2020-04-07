const Controller = require('./Controller/controller.js')
let command_1 = process.argv[2]
let command_2 = process.argv[3]


console.clear()
switch (command_1) {
    case 'help':
        Controller.help();
        break;

    case 'list':
        Controller.list();
        break;

    case 'add':
        Controller.add(command_2);
        break;

    case 'findById':
        Controller.findById(command_2);
        break;

    case 'delete':
        Controller.delete(command_2);
        break;
    
    case 'complete':
        Controller.complete(command_2);
        break;
    
    case 'uncomplete':
        Controller.uncomplete(command_2);
        break;

    default:
        Controller.kosong();
        break;
}
