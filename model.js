const fs = require('fs')
let data = fs.readFileSync('./data.json', 'utf8')
data = JSON.parse(data)

class Model {
  static list(){
    return data
  }
  
  static add(task){
    data.push({
      id : data.length +1,
      task : task,
      status : "[ ]"
    })
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf8')
    return data
  }

  static findById(id){
    let result = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id){
        result.push(data[i])
      }
    }
    return result
  }

  static delete(id){
    let deleted = []
    deleted.push(data[id-1].task)
    let result = []
    for (let i = 0; i < data.length; i++) {
      if(data[i].id !== +id){
        result.push({
          id : result.length+1,
          task : data[i].task,
          status : data[i].status
        })
      }
    }
    fs.writeFileSync('./data.json', JSON.stringify(result, null, 2), 'utf8')   
    return deleted    
  }

  static complete(id){
    data[id - 1].status = "[x]";
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf8');
  }

  static uncomplete(id){
    data[id - 1].status = "[ ]";
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf8');
  }
}

module.exports = Model