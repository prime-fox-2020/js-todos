const controllers = require('./controllers')

const argv = process.argv.slice(2)
// console.log(argv)
// console.log(argv.length)
let tags = ''
if(argv.length != 0){
  if (argv[0].includes('filter:')){
    tags = argv[0].split(':')[1]
    argv[0] = 'filter'
  }
}


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
  case 'tag' : controllers.tag(Number(argv[1]), argv.slice(2).join(' ')); break
  case 'filter' : controllers.filter(tags); break
  default : controllers.help(); break
}