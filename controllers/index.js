let task = require('../models');
let view = require('../views');

class taskController {

    static list() {
        let list = task.findAll();
        view.showList(list);
    }

    static listCreated() {
        let list = task.findAll();
        if (input === 'desc') {
            view.showList(list);
        } else {
            list.reverse();
            view.showList(list);
        }
    }

    static listComplete(input) {
        let list = task.findComplete();
        if (input === 'desc') {
            view.showList(list);
        } else {
            list.reverse();
            view.showList(list);
        }

    }

    static listOutstanding(input) {
        let list = task.findOutstanding();
        if (input === 'desc') {
            view.showList(list);
        } else {
            list.reverse();
            view.showList(list);
        }
    }

    static addTask(input) {

        task.addTask(input);
        view.showMessage(`Added "${input}" to your To-Do list...`)
    }

    static findById(id) {
        let data = task.findOne(Number(id));
        if (!data) {
            view.showMessage(`Task dengan id ${id} tidak ditemukan`);
        } else view.displayById(data);
    }

    static deleteTask(id) {
        let test = task.deleteTask(Number(id));
        if (!test) {
            view.showMessage(`There is no task with id ${id}`);
        } else {
            view.showMessage(`Removing "${test}" from your To-Do list...`);
        }
    }

    static completeTask(id) {
        task.cheked(Number(id));
        let list = task.findAll();
        view.showList(list);
    }

    static uncompleteTask(id) {
        task.unchecked(Number(id));
        let list = task.findAll();
        view.showList(list);
    }

    static addTag(input) {
        let id = input[0];
        let tag = input.slice(1);
        let data = task.addTag(Number(id), tag)
        view.showMessage(`Tagged task "${data[0]}" with tags: ${data[1].join(' ')}`);
    }

    static filter(tag) {
        let filtered = task.filtered(tag);
        if (filtered.length === 0) view.showMessage(`There is no task with tag ${tag}`);
        else view.showList(filtered);
    }

    static getHelp() {
        view.help();
    }

    static notInCommandList() {
        view.showMessage("Unrecognized command");
        view.help();
        return
    }
}

module.exports = taskController;