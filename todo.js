// const model = require('./model.js')
const controller = require('./controller.js')

let input = process.argv.slice(2)
switch(input[0]) {
    case 'help' : controller.help(); break;
    case 'list' : controller.displayList(); break;
    case 'add' : controller.addTask(input[1]); break;
    case 'findById' : controller.findById(input[1]); break;
    case 'delete' : controller.deleteTask(input[1]); break;
    case 'complete' : controller.completedTask(input[1]); break;
    case 'uncomplete' : controller.uncompleteTask(input[1]); break;
    case 'list:created' : controller.sortByDate(input[1]); break;
    case 'list:completed' : controller.listCompletedTask(input[1]); break;
    case 'tag' : controller.tag(input[1], input.slice(2)); break;
}
// console.log(input)