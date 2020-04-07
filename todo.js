'use-strict'
const Controller = require('./controller')
const [,,route,...argv] = process.argv

// console.log(route)

switch (route) {
  case 'add': Controller.create(argv.join(' ')); break
  case 'list': Controller.read(); break
  case 'complete': Controller.complete(Number(argv[0])); break
  case 'uncomplete': Controller.uncomplete(Number(argv[0])); break
  case 'delete': Controller.delete(Number(argv[0])); break
  case 'findById': Controller.findById(Number(argv[0])); break
  case 'help':
  case undefined : Controller.help(); break
  default: Controller.errorCommand(route); break
}