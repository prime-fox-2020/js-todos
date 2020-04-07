const controllers = require('./controllers')

const argv = process.argv.slice(2)
// console.log(argv)
// console.log(argv.length)

switch(argv[0]){
  case 'help' : controllers.help(); break
  case 'list' : controllers.list(); break
  case 'add' : controllers.add(argv[1]); break
  case 'findById' : controllers.findById(argv[1]); break
  case 'delete' : controllers.delete(argv[1]); break
  case 'complete' : controllers.complete(argv[1]); break
  case 'uncomplete' : controllers.uncomplete(argv[1]); break
  case 'list:created' : controllers.listCreated(argv[1]); break
  case 'list:completed' : controllers.listCompleted(argv[1]); break
  default : controllers.help(); break
}