const fs = require('fs')

class Model {
  static list(){
    let data = fs.readFileSync('./data.json', 'utf8')
    data = JSON.parse(data)
    return data
  }
  
  static add(task){
    let data = fs.readFileSync('./data.json', 'utf8')
    data = JSON.parse(data)
    data.push({
      id : data.length +1,
      task : task
    })
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf8')
    return data
  }

  static findById(id){
    let data = fs.readFileSync('./data.json', 'utf8')
    data = JSON.parse(data)
    let result = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id){
        result.push(data[i])
      }
    }
    return result
  }
}

module.exports = Model