let Controller = require('./controller')
let input = process.argv.slice(2)

switch(input[0]){
    case 'help':
        Controller.help();
    break;
    case 'list':
        Controller.showList();
    break;
    case 'add':
        Controller.addTask(input[1]);
    break;
    case 'findById':
        Controller.findId(input[1]);
    break;
    case 'delete':
        Controller.delete(input[1]);
    break;
    case 'complete':
        Controller.complete(input[1]);
    break;
    case 'uncomplete':
        Controller.uncomplete(input[1]);
    break;
    case 'list:created':
        Controller.sortListDate(input[1]);
    break;
    case 'list:completed':
        Controller.sortCompletedDate(input[1]);
    break;
    case 'tag':
        Controller.tag(input[1], input.slice(2));
        console.log(input)
    break;
    case 'filter':
        Controller.filter(input[1]);
    break;
    default :
        Controller.help();
    break;
}
