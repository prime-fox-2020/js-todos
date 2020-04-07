const   fs = require('fs');
const data = fs.readFileSync('./data.json', 'utf8');
// let result = JSON.parse(data);

class Model {
  static read(){
    const result = JSON.parse(data);
    return result;
  }

  static add(task){
    task = JSON.stringify(task,null, 2);
    Model.save(task);
    return task;
  }

  static delete(todos){
    for(let i = 0; i < todos.length; i++){
      todos[i].Id = i+1;
    }
    todos = JSON.stringify(todos,null, 2);
    Model.save(todos);
  }

  static update(todos){
    todos = JSON.stringify(todos,null, 2);
    Model.save(todos);
  }

  static save(task){
    fs.writeFileSync('./data.json',task);
  }
}


module.exports = Model;