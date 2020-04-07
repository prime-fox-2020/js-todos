const Controller = require('../js-todos/Controller/controller')
const command = process.argv[2]
const input = process.argv.slice(3)

switch(command){
    case 'help':
        Controller.showHelp()
        break;
    case 'list':
        Controller.showList(command)
        break;
    case 'add':
        Controller.add(input)
        break;
    case 'findById':
        Controller.findById(input)
        break;
    case 'delete':
        Controller.delete(input)
        break;
    case 'complete':
        Controller.complete(input)
        break;
    case 'uncomplete':
        Controller.uncomplete(input)
        break;
    case 'filter':
        Controller.filter(input)    
    break;
    default:
        console.log('Please type "todo.js help" for more information');
        break;
}