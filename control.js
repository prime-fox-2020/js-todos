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
                obj[id + 1] = ['[ ]', judul.replace('\"', '')];
                model.updateList(obj);
                view.updateList(judul, 'add');
                break;
            }
            case 'findById' : {
                view.find(model.readList(), command[1]);
                break;
            }
            case 'delete' : {
                let obj = model.readList(), judul = obj[command[1]][1];
                delete obj[command[1]];
                model.updateList(obj);
                view.updateList(judul, 'del');
                break;
            }
            case 'complete' : {
                let obj = model.readList();
                obj[command[1]][0] = '[x]';
                model.updateList(obj);
                view.printList(model.readList());
            }
            case 'uncomplete' : {
                let obj = model.readList();
                obj[command[1]][0] = '[ ]';
                model.updateList(obj);
                view.printList(model.readList());
            }
            default : {view.default(); break}
        }
    }
}

module.exports = Control;