'use strict'
const View  = require('./view.js');
const Model = require('./model.js');

class Controller{
  static help(){
    View.help();
  }

  static list(){
    let model = Model.read();
    View.list(model);
  }

  static add(task){
    const todos = Model.read();
    todos.push({
      Id        : todos.length + 1,
      todo      : task,
      complete  : false
    });
    Model.add(todos);
    View.add(task);
  }

  static findById(task){
    const todos = Model.read();
    let search;
    for(let todo of todos){
      if(todo.Id === Number(task)) search = todo;
    }
    View.findById(search);
  }

  static delete(id){
    const todos = Model.read();
    const task = todos[id-1].todo;
    todos.splice(id-1, 1);
    Model.delete(todos);
    View.delete(task);
  }

  static complete(id){
    const todos = Model.read();
    todos[id-1].complete = true;
    Model.update(todos);
    View.list(todos);
  }

  static uncomplete(id){
    const todos = Model.read();
    todos[id-1].complete = false;
    Model.update(todos);
    View.list(todos);
  }
}

module.exports = Controller;