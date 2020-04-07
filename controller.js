const View = require('./view');

class Controller {
  static getInput(input) {
    switch (input) {
      case undefined: View.help(); break;
      case 'help': View.help(); break;
      default: View.commandNotFound(); View.help();
    }
  }
}

module.exports = Controller;