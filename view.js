

class View {
  static help(){
    console.log('------------------------- HELP -------------------------')
    console.log('$ node todo.js')
    console.log('$ node todo.js help')
    console.log('$ node todo.js list')
    console.log('$ node todo.js add <task_content>')
    console.log('$ node todo.js findById <task_id>')
    console.log('$ node todo.js delete <task_id>')
    console.log('$ node todo.js complete <task_id>')
    console.log('$ node todo.js uncomplete <task_id>')
    console.log('$ node todo.js list:created asc|desc <default = desc>')
    console.log('$ node todo.js list:completed asc|desc <default = desc>')
  }

  static list(data){
    for (let i = 0; i < data.length; i++) {
      console.log(`${data[i].id}. ${data[i].status} ${data[i].task}`)
    }
  }

  static succesMessage(msg){
    console.log(msg)
  }

  static deleteMessage(msg){
    console.log(msg)
  }

  static dateCreated(data){
    for(let i = 0; i < data.length; i++){
        console.log(`${data[i].id}. ${data[i].status} ${data[i].task} created at : ${data[i].created_date}`)
    }
  }

  static dateCompleted(data){
    for(let i = 0; i < data.length; i++){
      console.log(`${data[i].id}. ${data[i].status} ${data[i].task} completed at : ${data[i].completed_date}`)
    }
  }
}



module.exports = View