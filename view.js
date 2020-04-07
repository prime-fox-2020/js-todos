'use strict'
class View{
  static help(){
    console.log(`
  --help        $ node todo.js
                $ node todo.js help
  --list        $ node todo.js list
  --add         $ node todo.js add <task_content>
  --find        $ node todo.js findById <task_Id>
  --delete      $ node todo.js delete <task_Id>
  --complete    $ node todo.js complete <task_complete>
  --uncomplete  $ node todo.js uncomplete <task_uncomplete>
    `);
  }

  static add(task){
    console.log(`Added "${task}" to your TODO list...`);
  }

  static list(lists){
    for(let list of lists){
      if(list.complete) console.log(`[x] ${list.Id}. ${list.todo}`);
      else console.log(`[ ] ${list.Id}. ${list.todo}`);
    }
  }

  static findById(todoId){
    if(!todoId) console.log("ToDo not Found!")
    else console.log(`${todoId.Id}. ${todoId.todo}`);
  }

  static delete(task){
    console.log(`Deleted "${task}" from your TODO list...`);
  }  
}


module.exports = View;