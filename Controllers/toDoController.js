'use strict'

const ToDoModel = require('../Models/toDoModel.js')
const ToDoView = require('../Views/toDoView')

class ToDoController {
  static help () {
    ToDoView.showHelp()
  }

  static error () {
    ToDoView.showError()
  }

  static displayToDoList (field, sortBy) {
    let type = ''
    if (field === 'created') {
      type = 'date_created'
    } else if (field === 'completed') {
      type = 'date_finished'
    }
    const sortedList = ToDoModel.list(type, sortBy[0])
    ToDoView.displayToDoList(sortedList)
  }

  static addToDoList (id) {
    const result = ToDoModel.addTask(id)
    if (result === 'success') ToDoView.showResult(id, 'add')
  }

  static findToDoList (id) {
    const data = ToDoModel.findTask(id)
    ToDoView.showResult(data, 'findById')
  }

  static deleteToDoList (id) {
    const result = ToDoModel.deleteTask(id)
    if (result === 'success') ToDoView.showResult(id, 'delete')
  }

  static setStatus (id, status) {
    const data = ToDoModel.setStatus(id, status)
    ToDoView.showResult(data, 'setStatus')
  }
}

module.exports = ToDoController