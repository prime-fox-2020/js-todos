const view = require('./view')
const model = require('./model')

class Controllers {
  static help (){
    view.help()
  }

  static list (){
    let data = model.list()
    view.list(data)
  }

  static add (task){
    model.add(task)
    view.succesMessage(`Added "${task}" to your TODO list...`)
  }

  static findById (id){
    let result = model.findById(id)
    view.list(result)
  }

  static delete (id){
    let result = model.delete(id)
    view.deleteMessage(`Delete "${result}" from your TODO list...`)
    
  }

  static complete (id){
    let data = model.list()
    model.complete(id)
    view.list(data)
  }

  static uncomplete (id){
    let data = model.list()
    model.uncomplete(id)
    view.list(data)
  }

  static listCreated (sort){
    let result = model.listCreated(sort)
    view.dateCreated(result)
  }

  static listCompleted (sort){
    let result = model.listCompleted(sort)
    view.dateCompleted(result)
  }

  static tag(id, tags){
    model.addTag(id , tags)
    let task = model.findTask(id)
    view.listData(`Task "${task}" has been tag with: ${tags}`)
  }

  static filter(tag){
    let data = model.filter(tag)
    view.filter(data)
  }
}

module.exports = Controllers