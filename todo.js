const Controller = require('./controller');

const command = process.argv[2];
let argument = process.argv[3];
switch(command) {
    case undefined :
    case 'help': Controller.showCommandsList(); break;
    case 'list' : Controller.displayToDoList(); break;
    case 'add' : Controller.addToDoList(argument); break;
    case 'findById' : Controller.findID(argument); break;
    case 'delete' : Controller.deleteTask(argument); break;
    case 'complete' : Controller.completeTask(argument); break;
    case 'uncomplete' : Controller.uncompleteTask(argument); break;
    case 'list:created' : Controller.sortByTime(argument); break;
    case 'list:completed' : Controller.sortCompletedTask(argument); break;
    default: Controller.wrongCommand();
}