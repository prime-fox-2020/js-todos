'use strict';

let model = require('./model');
let view = require('./view');

class Control {
    static run(command) {
        switch (command[0]) {
            case undefined: {
                view.printArr(model.read());
                break;
            }
            case 'help': {
                view.printArr(model.read());
                break;
            }
            default : {view.default(); break}
        }
    }
}

module.exports = Control;