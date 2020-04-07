'use strict'
const View  = require('./view.js');
const Model = require('./model.js');

class Controller{
  static help(){
    View.help();
  }

  static list(created = 'created', list = 'asc'){
    let model = Model.read(created, list);
    View.list(model);
  }

  static add(task){
    const todos = Model.read();
    todos.push({
      Id        : todos.length + 1,
      todo      : task,
      complete  : false,
      tags      : []
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
    View.filter(search);
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

  static tags(id, tags){
    const todos   = Model.read();
    let   arrTags = [];
    for(let tag of tags){
      if(todos[id-1].tags.indexOf(tag) === -1){
        todos[id-1].tags.push(tag);
        arrTags.push(tag)
      }
    }
    arrTags = arrTags.join(' ');
    View.tags(todos[id-1].todo, arrTags);
    Model.update(todos);
  }

  static filter(tag){
    const todos = Model.read();
    const filter = [];
    for(let todo of todos){
      let check = false;
      for(let tagged of todo.tags){
        if(tagged === tag) check = true;
      }
      if(check) filter.push(todo);
    }
    View.filter(filter);
  }
}

module.exports = Controller;