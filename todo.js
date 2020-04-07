const Controller = require('./controller');

let command = process.argv[2];
const params = process.argv.slice(3);

// if(command.includes(':')){
//     command = command.split(':');
// }

switch(command){
    case 'help':
        Controller.help();
        break;
    case 'list':
        Controller.list(command);
        break;
    case `${command === 'list:created' ? command : command === 'list:outstanding' ? command : command === 'list:completed' ? command : ''}`:
        Controller.list(command);
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
    case 'tag':
        Controller.tag(params.shift(), params.join(' '));
        break;
    case `${command === 'complete' ? 'complete' : command === 'uncomplete' ? 'uncomplete' : ''}` :
        Controller.status(command, params[0]);
        break;
    // case `${command[0] == 'filter' ? command[0] : ''}:${command[1]}`:
    //     console.log(command);
    //     break;
    default :
        Controller.help();
        break;
}