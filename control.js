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
                obj[id + 1] = {
                    status: '[ ]',
                    name: judul.replace('\"', ''),
                    tag: [],
                    createDate: new Date(),
                    completeDate: ''
                }
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
                obj[command[1]].status = '[x]';
                obj[command[1]].completeDate = new Date();
                model.updateList(obj);
                view.printList(model.readList());
                break;
            }
            case 'uncomplete' : {
                let obj = model.readList();
                obj[command[1]].status = '[ ]';
                obj[command[1]].completeDate = '';
                model.updateList(obj);
                view.printList(model.readList());
                break;
            }
            case 'list:created' : {
                view.printList(model.readList(), command[1], 'create');
                break;
            }
            case 'list:completed' : {
                view.printList(model.readList(), command[1], 'complete');
                break;
            }
            case 'tag' : {
                let obj = model.readList(), tag = '';
                for (let i = 2; i < command.length; i++){
                    obj[command[1]].tag.push(command[i]);
                    tag += command[i] + ' ';
                }
                model.updateList(obj);
                view.updateList(obj[command[1]].name, 'tag', tag);
                break;
            }
            case 'filter' : {
                view.filter(model.readList(), command[1]);
                break;
            }
            default : {view.default(); break}
        }
    }
}

module.exports = Control;