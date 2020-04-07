const View = require('./view');
const Model = require('./model');

class Controller {
  static getInput(input, task) {
    switch (input) {
      case undefined: View.help(); break;
      case 'help': View.help(); break;
      case 'list': View.displayTodo(Model.list()); break;
      case 'add': View.infoAdd(Model.add(task, Model.list())); break;
      case 'findById': View.fromId(Model.list(), task); break;
      case 'delete': View.delete(Model.delete(task, Model.list())); break;
      case 'complete': Model.changeStatus(task, Model.list(), true); View.displayTodo(Model.list()); break;
      case 'uncomplete': Model.changeStatus(task, Model.list(), false); View.displayTodo(Model.list()); break;
      default: View.commandNotFound(); View.help();
    }
  }
}

module.exports = Controller;