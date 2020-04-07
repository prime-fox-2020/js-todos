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
            if (task.id == id) {
                task.status = 'complete';
            }
        }
        Model.writeToDoList(taskList);

        View.toDoList(taskList);
    }

    static uncompleteTask(id) {
        const taskList = Model.readToDoList();
        for (let task of taskList) {
            if (task.id == id) {
                task.status = 'incomplete';
            }
        }
        Model.writeToDoList(taskList);
        View.toDoList(taskList);
    }

    static sortByTime(order = 'asc') {
        const taskList = Model.readToDoList();
        if (order == 'asc') {
            taskList.sort((a, b) => (a.timeStamp < b.timeStamp) ? 1 : -1);
        } else if (order == 'desc') {
            taskList.sort((a, b) => (a.timeStamp > b.timeStamp) ? 1 : -1);
        }
        View.toDoList(taskList);
        Model.writeToDoList(taskList);
    }

    static sortCompletedTask(order = 'asc') {
        const taskList = Model.readToDoList();
        if (order == 'asc') {
            taskList.sort((a, b) => (a.status > b.status) ? 1 : -1);
        } else if (order == 'desc') {
            taskList.sort((a, b) => (a.status < b.status) ? 1 : -1);
        }
        View.toDoList(taskList);
        Model.writeToDoList(taskList);
    }

    static setTagToTask(id, tagArray) {
        const taskList = Model.readToDoList();
        let selectedTask = ''
        for (let task of taskList) {
            if (task.id == id) {
                selectedTask = task.task;
                task.tag = tagArray;
                break;
            }
        }
        Model.writeToDoList(taskList);
        View.taggedTask(selectedTask, tagArray);
    }

    static filterByTag(selectedTag) {
        const taskList = Model.readToDoList();
        // for (let task = 0; task < taskList.length; task++) {
        //     let findTag = false;
        //     for (let tag of taskList[task].tag) {
        //         if (tag == selectedTag) {
        //             findTag = true;
        //             break;
        //         }
        //     }
        //     if (!findTag){
        //         taskList.splice(task, 1);
        //     }
        // }
        // View.toDoList(taskList);
        let selectedTask = [];
        for (let task of taskList) {
            for (let tag of task.tag) {
                if (tag == selectedTag) {
                    selectedTask.push(task);
                    break;
                }
            }
        }
        View.toDoList(selectedTask);
    }

    static showCommandsList() {
        View.commandsList();
    }

    static wrongCommand() {
        View.wrongCommand();
    }
}

module.exports = Controller;