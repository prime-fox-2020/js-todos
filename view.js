class View {

  static create() {
    console.log('cret')
  }
  static read() {
    View.read()
  }
  static update() {
    console.log('upda')
  }
  static delete() {
    console.log('dele')
  }
  static errorCommand() {
    console.log('$ node todo.js help')
    console.log('$ node todo.js list')
    console.log('$ node todo.js add <task_content>')
    console.log('$ node todo.js findById <task_id>')
    console.log('$ node todo.js delete <task_id>')
    console.log('$ node todo.js complete <task_id>')
    console.log('$ node todo.js uncomplete <task_id>')
  }
}

module.exports = View