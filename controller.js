const Model = require('./model');
const View = require('./view');

class Controller {
    
    static to_do_commands() {
        View.to_do_commands();
    }
}

module.exports = Controller;