'use strict'

const command = process.argv[2] ? process.argv[2].split(':') : ``
const input = process.argv.slice(3)

const ToDoController = require('./Controllers/toDoController')

switch (command[0]) {
  case 'help':
    ToDoController.help()
    break
  case 'list':
    ToDoController.displayToDoList(command[1], input)
    break
  case 'add':
    ToDoController.addToDoList(input[0])
    break
  case 'findById':
    ToDoController.findToDoList(input[0])
    break
  case 'delete':
    ToDoController.deleteToDoList(input[0])
    break
  case 'complete':
    ToDoController.setStatus(input[0], true)
    break
  case 'uncomplete':
    ToDoController.setStatus(input[0], false)
    break
  case 'tag':
    break
  case 'filter':
    ToDoController.filterToDoList(command[1])
    break
  default:
    ToDoController.error()
}

// RELEASE 0 : Implement the 'help' command
// RELEASE 1 : Implement the 'list' command
// RELEASE 2 : Implement the 'add' command
// RELEASE 3 : Implement the 'findById' command
// RELEASE 4 : Implement the 'delete' command
// RELEASE 5 : Implement the 'complete' and 'uncomplete' command
// RELEASE 6 : Implement the 'list:created' command
// RELEASE 7 : Implement the 'list:completed' command
// RELEASE 8 : Implement the 'tag' command
// RELEASE 9 : Implement the 'filter' command
