const Controller = require('./controller');

let command = process.argv[2];
command = command.split(':');

let argument = process.argv[3];

let tagArray = [];
if (command == 'tag') {
    for (let i = 4; i < process.argv.length; i++) {
        tagArray.push(process.argv[i]);
    }
}

switch(command[0]) {
    case undefined :
    case 'help': Controller.showCommandsList(); break;
    case 'list' : 
        switch(command[1]) {
            case 'created': Controller.sortByTime(argument); break;
            case 'completed': Controller.sortCompletedTask(argument); break;
            default : Controller.displayToDoList(); break;
        } break;
    case 'add' : Controller.addToDoList(argument); break;
    case 'findById' : Controller.findID(argument); break;
    case 'delete' : Controller.deleteTask(argument); break;
    case 'complete' : Controller.completeTask(argument); break;
    case 'uncomplete' : Controller.uncompleteTask(argument); break;
    case 'tag' : Controller.setTagToTask(argument, tagArray); break;
    case 'filter' : Controller.filterByTag(command[1]); break;
    default: Controller.wrongCommand();
}