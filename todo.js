const Controller = require('./controller.js');

const command = process.argv[2];
const argv = process.argv[3];

switch (command) {
    case 'help':
        Controller.help();
        break;
    case 'list':
        Controller.list();
        break;
    case 'add':
        Controller.add(argv);
        break;
    case 'findByID':
        Controller.findByID(argv);
        break;
    case 'delete':
        Controller.delete(argv);
        break;
    case 'complete':
        Controller.complete(argv);
        break;
    case 'uncomplete':
        Controller.uncomplete(argv);
        break;                                 
    default:
        Controller.help();
        break;
}