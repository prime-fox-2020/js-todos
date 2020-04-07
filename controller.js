const Model = require('./model');
const View = require('./view');

class Controller {
    static addToDoList(newTask) {
        Model.addToDoList(newTask);
    }
    
    static displayToDoList() {
        const taskList = Model.readToDoList();
        View.toDoList(taskList);
    }

    static findID(id) {
        const selectedTask = Model.findID(id);
        View.toDoList(selectedTask);
    }

    static deleteTask(id) {
        const deletedTask = Model.deleteTask(id);
        View.deletedTask(deletedTask);
    }

    static completeTask(id) {
        const taskList = Model.readToDoList();
        for (let task of taskList) {
            if (task.id == id ) {
                task.status = 'complete';
            }
        }
        Model.writeToDoList(taskList);

        View.toDoList(taskList);
    }

    static uncompleteTask(id) {
        const taskList = Model.readToDoList();
        for (let task of taskList) {
            if (task.id == id ) {
                task.status = 'incomplete';
            }
        }
        Model.writeToDoList(taskList);

        View.toDoList(taskList);
    }

    static sortByTime(order = 'asc'){
        const taskList = Model.readToDoList();
        if (order == 'asc') {
            taskList.sort((a, b) => (a.timeStamp > b.timeStamp) ? 1 : -1);
        } else if (order == 'desc') {
            taskList.sort((a, b) => (a.timeStamp < b.timeStamp) ? 1 : -1);
        }
        View.toDoList(taskList);
    }

    static showCommandsList() {
        View.commandsList();
    }

    static wrongCommand() {
        View.wrongCommand();
    }
}

module.exports = Controller;