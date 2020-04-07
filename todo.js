const Controller = require('./controller')
const argv = process.argv.slice(2)

switch(argv[0]) {
    case 'help' : Controller.help();break
    case 'list' : Controller.list();break
    case 'findById' : Controller.findId(argv[1]);break
    case 'add' : Controller.add(argv[1]);break
    case 'delete' : Controller.delete(argv[1]);break
    case 'complete' : Controller.complete(argv[1]);break
    case 'uncomplete' : Controller.uncomplete(argv[1]);break
    default : Controller.help();break
}

