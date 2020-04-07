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
        Controller.findById(params);
        break;
    case 'delete':
        Controller.delete(params);
        break;
    case 'status':
        Controller.status(params[0], params[1]);
        break;
    default :
        Controller.help();
        break;
}