
class View {
    static show() {
        console.log(data)
    }

    static help() {
        console.log('All command > todo.js "command"')
        console.log('help')
        console.log('list')
        console.log('add <task_content>')
        console.log('findByID <task_id>')
        console.log('delete <task_id>')
        console.log('complete <task_id>')
        console.log('uncomplete <task_id>')
    }

    static list(data) {
        for (let a in data) {
            console.log(`${data[a].id}. ${data[a].status} ${data[a].task}`)
        }
    }

    static success(data) {
        console.log(data)
    }

}

module.exports = View