const controllers = require('./controllers')

const argv = process.argv.slice(2)
// console.log(argv)

switch(argv[0]){
  case 'help'     : controllers.help();break
  case 'list'     : controllers.list();break
  case 'add'      : controllers.add(argv[1]);break
  case 'findById' : controllers.findById(argv[1]);break
  default : controllers.help();break
}