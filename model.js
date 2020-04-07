const fs = require("fs")

class TaskModel {
    constructor(name) {
        this.task = name;
        this.id = this.returnId();
        this.done = " "
        this.createdAt = Date.now()
        this.completedAt = null
        this.tags = []
    }

    returnId() {
        let arr = TaskModel.list();
        if(arr) {
            return +(arr[arr.length - 1].id) + 1;
        }
        else return 1
    }

    static help() {
        return `
    ————————————————————————————————————————————
     ~  HELP FILE for the to-do list program  ~
    ————————————————————————————————————————————
    COMMAND LINE ARGUMENTS:       DESCRIPTION:
    - help                        # Shows list of commands.
    - list                        # Shows entire to-do list.
    - add <task_content>          # Adds new task to to-do list.
    - findById <task_id>          # Shows specified task.
    - delete <task_id>            # Deletes specified task.
    - complete <task_id>          # Marks specified task as complete.
    - uncomplete <task_id>        # Marks specified task as incomplete.
    - list:created asc|desc       # Shows to-do list sorted by date created (default: descending)
    - list:outstanding asc|desc   # Shows outstanding tasks sorted date created (default: descending)
    - list:completed asc|desc     # Shows completed tasks sorted date completed (default: descending)
    - tag <task_id> <tag_name>    # Adds new tag to specified task   * future update
    - filter <tag_name>           # Shows tasks that have the specified tag   * future update
`
    }

    static list() {
        let source = fs.readFileSync("data.json", "utf8")
        if(source.length <= 1){
            return null
        }
        return JSON.parse( source )
    }

    static writeToFile(arrayOfObj) {
        fs.writeFileSync("data.json", JSON.stringify(arrayOfObj, null, 2), "utf8")
    }

    static add(str) {
        let arr = TaskModel.list()
        if(Array.isArray(arr)){
            arr.push( new TaskModel(str) )
        }
        else{
            arr = [new TaskModel(str)]
        }
        TaskModel.writeToFile(arr)
    }

    static findById(num) {
        let arr = TaskModel.list()
        for(let obj of arr) {
            if(obj.id === num) {
                return obj
            }
        }
        return null
    }

    static delete(num) {
        let arr = TaskModel.list()
        let index = null

        for(let i = 0; i < arr.length; i ++){
            if(arr[i].id === num){
                index = i
            }
        }

        if(index != null) {
            let deleted = arr.splice(index, 1)
            TaskModel.writeToFile(arr)
            return deleted
        }
        else return index
    }

    static complete(num, uncomplete) {
        let arr = TaskModel.list()
        let changed = null

        for(let obj of arr) {
            if(obj.id === num) {
                if(uncomplete) {
                    obj.done = " "
                    obj.completedAt = null
                    changed = obj
                }
                else {
                    obj.done = "x"
                    obj.completedAt = Date.now()
                    changed = obj
                }
            }
        }

        TaskModel.writeToFile(arr)
        return changed
    }

    static showSorted(order) {
        let arr = TaskModel.list()
        return (order === "asc") ? arr : arr.reverse()
    }

    static showCompleteSorted(order, outstanding) {
        let arr = TaskModel.list()
        let arrFiltered = []
        let condition = outstanding ? " " : "x"

        for(let obj of arr) {
            if(obj.done === condition) {
                arrFiltered.push(obj)
            }
        }
        return (order === "asc") ? arrFiltered : arrFiltered.reverse()
    }
}


TaskModel.list()
module.exports = TaskModel