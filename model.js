const fs = require('fs')
let data = fs.readFileSync('./data.json', 'utf8')
data = JSON.parse(data)

class Model {
  static list(){
    return data
  }
  
  static add(task){
    let date = Model.getDate()
    data.push({
      id : data.length +1,
      task : task,
      status : "[ ]",
      created_date : date,
      completed_date : '',
      tag : ''
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
          status : data[i].status,
          created_date : data[i].created_date,
          completed_date : data[i].completed_date,
          tag : data[i]. tag
        })
      }
    }
    fs.writeFileSync('./data.json', JSON.stringify(result, null, 2), 'utf8')   
    return deleted    
  }

  static complete(id){
    let date = Model.getDate()
    data[id - 1].status = "[x]"
    data[id - 1].completed_date = date
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf8');
  }

  static uncomplete(id){
    data[id - 1].status = "[ ]"
    data[id - 1].completed_date = ''
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf8');
  }


  static getDate(){
    let today = new Date()
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date
  }  

  static listCreated (sort){
    if(sort == 'asc'){
      data.sort((a,b) => (a.created_date > b.created_date) ? 1 : -1)
    } else {
      data.sort((a,b) => (a.created_date < b.created_date) ? 1 : -1)
    }
    return data
  }

  static listCompleted (sort){
    let completed = []
    for (let i = 0; i < data.length; i++) {
      let flag = false
      if (data[i].status != '[x]'){
        flag = true
      }
      if(!flag){
        completed.push(data[i])
      }
    }
    if(sort == 'asc'){
      completed.sort((a,b) => (a.completed_date > b.completed_date) ? 1 : -1)
    } else {
      completed.sort((a,b) => (a.completed_date < b.completed_date) ? 1 : -1)
    }
    return completed
  }

  static findTask(id){
    let res 
    for(let i = 0; i < data.length; i++){
      if(data[i].id === id){
        res = data[i].task
        break
      }
    }
    return res
  }

  static addTag(id, tags){
    for(let i = 0; i < data.length; i++){
      if(data[i].id === id){
        data[i].tag = tags
        break
      }
    }
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
  }

  static filter(tag){
    let res = []
    for(let i = 0; i < data.length; i++){
        if(data[i].tag.includes(tag)){
          res.push(`${data[i].id}. ${data[i].task} [${data[i].tag}]`)
      }
    }
    return res
  }
}


module.exports = Model