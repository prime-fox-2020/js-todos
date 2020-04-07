const Controller = require('./controller')
const argv = process.argv.slice(2)

switch(true){
    case argv.length === 0 || argv[0] === 'help' : Controller.help(); break
    case argv[0] === 'list' : Controller.list(); break
    case argv[0] === 'add' : Controller.add(argv.slice(1).join(' ')); break
    case argv[0] === 'findById' : Controller.find(Number(argv[1])); break
    case argv[0] === 'delete' : Controller.delete(Number(argv[1])); break
    case argv[0] === 'complete' : Controller.complete(Number(argv[1])); break
    case argv[0] === 'uncomplete' : Controller.uncomplete(Number(argv[1])); break
    case argv[0] === 'list:created' && argv.length === 1 : Controller.listcreated('asc'); break
    case argv[0] === 'list:created' : Controller.listcreated(argv[1]); break
    case argv[0] === 'list:completed' && argv.length === 1 : Controller.listcompleted('asc'); break
    case argv[0] === 'list:completed' : Controller.listcompleted(argv[1]); break
    case argv[0] === 'tag' : Controller.tags(Number(argv[1]), argv.slice(2).join(' ')); break
    case argv[0].includes('filter:') : Controller.filter(argv[0].split(':')[1]); break
        
    default : Controller.errorMessage('Command tidak ditemukan'); break
}