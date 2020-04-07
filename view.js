

class View {
  static help(){
    console.log('-------------COMMAND LIST-------------')
    console.log('$ node todo.js')
    console.log('$ node todo.js help')
    console.log('$ node todo.js list')
    console.log('$ node todo.js add <task_content>')
    console.log('$ node todo.js findById <task_id>')
    console.log('$ node todo.js delete <task_id>')
    console.log('$ node todo.js complete <task_id>')
    console.log('$ node todo.js uncomplete <task_id>')
  }

  static list(data){
    for (let i = 0; i < data.length; i++) {
      console.log(`${data[i].id}. ${data[i].task}`)
    }
  }

  static succesMessage(msg){
    console.log(msg)
  }

  
}

module.exports = View