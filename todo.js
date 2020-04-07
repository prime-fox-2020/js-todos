const Controller=require('./controllers.js')
const argv=process.argv.slice(2)
switch(argv[0]){
    case 'help':Controller.help(); break
    case 'list':Controller.list(); break
    case 'add':Controller.add(argv[1]); break
    case 'findById':Controller.findById(Number(argv[1])); break
    case 'delete':Controller.delete(argv[1]); break
    case 'complete':Controller.complete(argv[1]); break
    case 'uncomplete':Controller.uncomplete(argv[1]); break
    case 'list:created':Controller.listCreateAt(argv[1]); break
    case 'list:completed':Controller.listCompleteAt(argv[1]); break
    case 'tag':Controller.tag(Number(argv[1]),argv[2],argv[3],argv[4],argv[5]); break
    case 'filter:':Controller.filter(argv[1]); break
    case 'list:outstanding':Controller.outStanding(argv[1]); break
    default:Controller.help(); break
}

