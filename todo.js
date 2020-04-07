const Controller = require('./controller');

const command = process.argv[2];
const params = process.argv.slice(3);


switch(command){
    case 'help':
        Controller.help();
        break;
    case 'list':
        Controller.list();
        break;
    case 'add':
        Controller.add(params[0]);
        break;
    case 'findById':
        Controller.findById(params[0]);
        break;
    case 'delete':
        Controller.delete(params[0]);
        break;
    case `${command === 'complete' ? 'complete' : 'uncomplete'}` :
        Controller.status(command, params[0]);
        break;
    default :
        Controller.help();
        break;
}