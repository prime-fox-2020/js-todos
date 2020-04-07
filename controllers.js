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
}

module.exports = Controllers