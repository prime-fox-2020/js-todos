const Controller = require('./controller')

const argv = process.argv[2]
const cmd = process.argv.slice(3)

switch (argv) {
    case 'help':
        console.log('$ node todo.js');
        console.log('$ node todo.js help');
        console.log('$ node todo.js list');
        console.log('$ node todo.js add <task_content>');
        console.log('$ node todo.js findById <task_id>');
        console.log('$ node todo.js delete <task_id>');
        console.log('$ node todo.js complete <task_id>');
        console.log('$ node todo.js uncomplete <task_id>');
        break;
    case 'list':
        Controller.list()
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
    default:
        console.log('$ node todo.js help');
        break;
}