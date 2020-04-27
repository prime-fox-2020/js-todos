'use strict'

// Import file
const fs = require('fs')

class ToDoModel {
  constructor (id, task, status, created_date) {
    this._id = id
    this.task = task
    this.status = status || false
    this.created_date = created_date || new Date()
    this.completed = null
    this.tag = []
  }

  get id () {
    return this._id
  }

  static parsed () {
    return JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
  }

  static list (type, sortBy) {
    const data = ToDoModel.parsed()
    const result = []

    if (sortBy !== 'asc' && sortBy !== 'desc') {
      sortBy = 'asc'
    }

    data.forEach(element => {
      result.push(new ToDoModel(element._id, element.task, element.status, element.created_date))
    })
    // console.log(result)

   
    if (sortBy === 'asc') {
      result.sort((a, b) => a[type + '_date'] - b[type + '_date'])
    } else if (sortBy === 'desc') {
      result.sort((a, b) => b[type + '_date'] - a[type + '_date'])
    }

    return result
  }

  static findTask (id) {
    const data = ToDoModel.list()
    const result = []
    data.forEach(element => {
      if (element.id === Number(id)) result.push(element)
    })
    return result
  }

  static addTask (str) {
    const data = ToDoModel.list()
    let createID = null

    if (data.length === 0) {
      createID = 1
    } else {
      createID = data[data.length - 1].id + 1
    }

    data.push(new ToDoModel(createID, str))
    const success = ToDoModel.save(data)

    if (success === 'success') return success
  }

  static deleteTask (id) {
    const data = ToDoModel.list()
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === Number(id)) {
        data.splice(i, 1)
        ToDoModel.save(data)
        return 'success'
      }
    }
  }

  static setStatus (id, status) {
    const data = ToDoModel.list()
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === Number(id)) {
        data[i].status = status
        ToDoModel.save(data)
      }
    }
    return data
  }

  static save (data) {
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
    return `success`
  }
}

module.exports = ToDoModel