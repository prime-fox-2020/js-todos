const   fs = require('fs');
const data = fs.readFileSync('./data.json', 'utf8');
// let result = JSON.parse(data);

class Model {
  static read(detail = 'created', sort = 'asc'){
    const result = JSON.parse(data);
    const arr = [];
    if(detail === 'created' && sort === 'asc') return result;
    if(detail === 'created' && sort === 'desc'){
      for(let i = result.length-1; i >= 0; i--) arr.push(result[i]);
      return arr;
    }
    if(detail === 'completed' && sort === 'asc'){
      for(let res of result){
        if(res.complete) arr.push(res);
      }
      return arr;
    }
    if(detail === 'completed' && sort === 'desc'){
      for(let i = result.length-1; i >= 0; i--){
        if(result[i].complete) arr.push(result[i]);
      }
      return arr;
    }
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