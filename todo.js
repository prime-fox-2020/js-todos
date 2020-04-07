const Controller = require('./controller')

const argv = process.argv[2]
const cmd = process.argv.slice(3)

switch (argv) {
    case 'help':
        Controller.help()
        break;
    case 'list':
        Controller.list()
        break;
    case 'list:created':
        Controller.created_date(cmd)
        break;
    case 'list:completed':
        Controller.completed_date(cmd)
        break;
    case 'add':
        Controller.add(cmd)
        break;
    case 'findById':
        Controller.findById(cmd)
        break;
    case 'delete':
        Controller.delete(cmd)
        break;
    case 'complete':
        Controller.complete(cmd)
        break;
    case 'uncomplete':
        Controller.uncomplete(cmd)
        break;
    case 'tag':
        Controller.tag(cmd)
        break;
    case 'filter':
        Controller.filter(cmd)
        break;
    default:
        console.log('$ node todo.js help');
        break;
}