let taskController = require('./controllers');

let command = process.argv.slice(2);
let cli = [];

if (command[0] !== undefined) {
    cli = command[0].split(':');
} else {
    cli[0] = command[0];
}

switch (cli[0]) {
    case 'list':
        {
            if (cli.length < 2) taskController.list();
            else {
                if (cli[1] === 'complete') {
                    taskController.listComplete(command[1]);
                } else if (cli[1] === 'created') {
                    taskController.listCreated(command[1]);
                } else if (cli[1] === 'outstanding') {
                    taskController.listOutstanding(command[1]);
                } else {
                    taskController.notInCommandList();
                }
            }
            break;
        }
    case 'add':
        taskController.addTask(command[1]);
        break;
    case 'findById':
        taskController.findById(command[1]);
        break;
    case 'delete':
        taskController.deleteTask(command[1]);
        break;
    case 'complete':
        taskController.completeTask(command[1]);
        break;
    case 'uncomplete':
        taskController.uncompleteTask(command[1]);
        break;
    case 'tag':
        taskController.addTag(command.slice(1));
        break;
    case 'filter':
        taskController.filter(cli[1]);
        break;
    case 'help' || undefined:
        taskController.getHelp();
        break;
    default:
        taskController.notInCommandList();
        break;
}