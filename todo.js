'use-strict'
const Controller = require('./controller')
const argv = process.argv[2]

// console.log(argv)

switch (argv) {
  case 'create': Controller.create(); break
  case 'read': Controller.read(); break
  case 'update': Controller.update(); break
  case 'delete': Controller.delete(); break
  case 'help': Controller.errorCommand(); break
  default: Controller.errorCommand(); break
}