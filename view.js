const Model = require('./model');

class View {
    static toDoList(taskList) {
        if (taskList == undefined || taskList.length == 0) {
            console.log("Task not found!")
        } else {
            for (let task of taskList) {
                console.log(`${task.id}. [${task.status == 'complete' ? 'X' : ' '}] ${task.task}`);
            }
        }   
    }

    static deletedTask(task) {
        console.log(`Deleted ${task} from your To-Do List.`);
    }

    static commandsList() {
        console.log("$ node todo.js # Menampilkan command apa saja yang tersedia");
        console.log("$ node todo.js help # Menampilkan command apa saja yang tersedia");
        console.log("$ node todo.js list # Melihat daftar To-Do");
        console.log("$ node todo.js add <task_content> # Menambahkan To-Do ke dalam list");
        console.log("$ node todo.js findByID <task_id> # Melihat detail To-Do sesuai 'task_id'-nya");
        console.log("$ node todo.js delete <task_id> # Menghapus To-Do sesuai 'task_id'-nya");
        console.log("$ node todo.js complete <task_id> # Menandai status To-Do selesai");
        console.log("$ node todo.js uncomplete <task_id> # Menandai status To-Do belum selesai");
    }

    static wrongCommand() {
        console.log("Command not found. Try '$ node todo.js help'");
    }
}

module.exports = View;