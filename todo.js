const Controller = require('./controller')

const argv = process.argv[2]
const cmd = process.argv.slice(3)

switch (argv) {
    case 'help':
        console.log('$ node todo.js');
        console.log('$ node todo.js help');
        console.log('$ node todo.js list');
        console.log('$ node todo.js list:created asc|desc');
        console.log('$ node todo.js list:completed asc|desc');
        console.log('$ node todo.js add <task_content>');
        console.log('$ node todo.js findById <task_id>');
        console.log('$ node todo.js delete <task_id>');
        console.log('$ node todo.js complete <task_id>');
        console.log('$ node todo.js uncomplete <task_id>');
        console.log('$ node todo.js tag <task_id> <task_name_1> <task_name_1> .... <task_name_N>');
        console.log('$ node todo.js filter <task_name>');
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