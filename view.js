class View {

  static create(item) {
    console.log(`Added "${item}" to your TODO list...`)
  }

  static read(todos, sort) {
    todos.forEach(todo => {
      todo.isCompleted ?
        console.log(`${todo.task_id}. [x] ${todo.task}`)
        : console.log(`${todo.task_id}. [ ] ${todo.task}`)
    })
  }

  static findById(todo) {
    todo.isCompleted ?
      console.log(`${todo.task_id}. [x] ${todo.task}`)
      : console.log(`${todo.task_id}. [ ] ${todo.task}`)
  }

  static delete(todo) {
    console.log(`Deleted "${todo[0].task}" from your TODO list...`)
  }

  static help() {
    console.log('$ node todo.js help')
    console.log('$ node todo.js list')
    console.log('$ node todo.js add <task_content>')
    console.log('$ node todo.js findById <task_id>')
    console.log('$ node todo.js delete <task_id>')
    console.log('$ node todo.js complete <task_id>')
    console.log('$ node todo.js uncomplete <task_id>')
  }

  static errorCommand(cmd) {
    console.log(`todo.js '${cmd}' is not a todo.js command. Try 'todo.js help'`)
  }
}

module.exports = View