const View = require('./view')
const fs = require('fs')
const src = './data.json'
const utf = 'utf8'
const data = JSON.parse(fs.readFileSync(src, utf))

class Model {

  static create(item) {
    data.todos.push({
      "task_id": data.id,
      "task": item,
      "isCompleted": false
    })
    data.id++
    fs.writeFileSync(src, JSON.stringify(data, null, 2))
    View.create(item)
  }

  static read() {
    View.read(data.todos)
  }

  static findById(id) {
    const todo = data.todos.find(obj => obj.task_id === id)
    View.findById(todo)
  }

  static complete(id) {
    const index = data.todos.findIndex(obj => obj.task_id === id)
    if (index < 0) throw `Task ID ${id} not found`
    data.todos[index].isCompleted = true
    fs.writeFileSync(src, JSON.stringify(data, null, 2))
    View.read(data.todos)
  }

  static uncomplete(id) {
    const index = data.todos.findIndex(obj => obj.task_id === id)
    if (index < 0) throw `Task ID ${id} not found`
    data.todos[index].isCompleted = false
    fs.writeFileSync(src, JSON.stringify(data, null, 2))
    View.read(data.todos)
  }

  static delete(id) {
    const index = data.todos.findIndex(obj => obj.task_id === id) 
    if (index < 0) throw `Task ID ${id} not found`
    const todo = data.todos.splice(index, 1)
    fs.writeFileSync(src, JSON.stringify(data, null, 2))
    View.delete(todo)
  }
}

module.exports = Model