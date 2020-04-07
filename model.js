const fs = require('fs');

class Model {
    static readToDoList() {
        return JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    }
    
    static writeToDoList(taskList) {
        taskList = JSON.stringify(taskList, null, 2);
        fs.writeFileSync('./data.json', taskList);
    }

    static addToDoList(newTask) {
        let taskList = this.readToDoList();
        taskList.push({id: taskList.length+1, task: newTask, tag: [], status: 'incomplete', timeStamp: Date.now()});
        this.writeToDoList(taskList);
    }

    static findID(id) {
        let taskList = this.readToDoList();
        for (let task of taskList) {
            if (task.id == id) {
                return [task];
            }
        }
    }

    static deleteTask(id) {
        let taskList = this.readToDoList();
        taskList.sort((a, b) => (a.timeStamp > b.timeStamp) ? 1 : -1);
        let deleted = '';
        let indexID = 0;
        for (let task = 0; task < taskList.length; task++) {
            if (taskList[task].id == id) {
                deleted = taskList[task].task;
                taskList.splice(task, 1);
                indexID = task;
                break;
            }
        }
        for (indexID; indexID < taskList.length; indexID++) {
            taskList[indexID].id = taskList[indexID].id -1;
        }
        this.writeToDoList(taskList);
        return deleted;
    }
}

module.exports = Model;