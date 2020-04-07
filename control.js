'use strict';

let model = require('./model');
let view = require('./view');

class Control {
    static run(command) {
        switch (command[0]) {
            case undefined: {
                view.printHelp(model.readHelp());
                break;
            }
            case 'help': {
                view.printHelp(model.readHelp());
                break;
            }
            case 'list': {
                view.printList(model.readList());
                break;
            }
            case 'add' : {
                let judul = '', id = 0, obj = model.readList();
                for (let i = 1; i < command.length; i++){
                    judul += command[i];
                }
                for (let i in obj) {
                    if (+i > id) id = +i;
                }
                obj[id + 1] = judul.replace('\"', '');
                model.addList(obj);
                view.addList(judul);
                break;
            }
            default : {view.default(); break}
        }
    }
}

module.exports = Control;