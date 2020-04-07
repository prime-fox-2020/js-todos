const model = require('./model')
const view = require('./view')

class Controller {
    static help () {
        view.help()
    }
    static displayList () {
        let disp = model.displayList()
        view.display(disp);
    }
    static addTask (newTask) {
        model.addTask(newTask);
        Controller.displayList() // static yang ada di dalam kelas yang sama
    }
    static findById (TaskId) {
        let findId = model.findById(TaskId);
        view.display(findId)
    }
    static deleteTask (oldTask) {
        model.deleteTask(oldTask);
        Controller.displayList()
    }
    static completedTask (task) {
        model.completedTask(task);
        Controller.displayList()
    }
    static uncompleteTask (task) {
        model.uncompleteTask(task);
        Controller.displayList()
    }
    static sortByDate (date) {
        let displaySortedByDate = model.sortByDate(date);
        view.display(displaySortedByDate);
    }
    static listCompletedTask (date) {
        let completedTask = model.listCompletedTask(date);
        view.display(completedTask);
    }
    static tag (id, tag) {
        Model.tag(id, tag);
        // view.display(completedTask);
    }
}

module.exports = Controller