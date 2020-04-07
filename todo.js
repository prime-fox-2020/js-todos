const Controller = require('./controller/Controller')
const command = process.argv[2]
const params = process.argv.slice(3)

switch (command.split(':')[0]) {
    case undefined:
        Controller.help()
        break;
    case 'help':
        Controller.help()
        break;
    case 'list':
        Controller.list(command.split(':')[1], params)
        break;
    case 'add':
        Controller.add(params)
        break;
    case 'findById':
        Controller.findById(params)
        break;
    case 'delete':
        Controller.delete(params)
        break;
    case 'complete':
        Controller.complete(params)
        break;
    case 'uncomplete':
        Controller.uncomplete(params)
        break;
    case 'tag':
        Controller.tags(params[0], params.slice(1))
    case 'filter':
        Controller.filter(params)
        break;
    default:
        Controller.message(command)
        break;

}
