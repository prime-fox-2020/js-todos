const View = require('./view');
const Model = require('./model');

class Controller {
  static getInput(input, task, options) {
    if (!input) input = ':';
    let command = input.split(':');
    switch (command[0]) {
      case undefined: View.help(); break;
      case 'help': View.help(); break;
      case 'list':
        switch (command[1]) {
          case 'created': View.sorted(Model.list(), task); break;
          case 'completed': View.completed(Model.list(), task); break;
          default: View.displayTodo(Model.list()); 
        }
        break;
      case 'add': View.infoAdd(Model.add(task, Model.list())); break;
      case 'findById': View.fromId(Model.list(), task); break;
      case 'delete': View.delete(Model.delete(task, Model.list())); break;
      case 'complete': Model.changeStatus(task, Model.list(), true); View.displayTodo(Model.list()); break;
      case 'uncomplete': Model.changeStatus(task, Model.list(), false); View.displayTodo(Model.list()); break;
      case 'tag': View.tagAdded(Model.tag(task, Model.list(), options)); break;
      case 'filter': View.filterTag(command[1], Model.list()); break;
      default: View.commandNotFound(); View.help();
    }
  }
}

module.exports = Controller;