const Controller = require('./controller')
// const a = process.argv
// console.log(a)
const argv = process.argv.slice(2)
const tag = argv.slice(2).join(' ')

let filter = ''
let opr = ''

if(argv.length !== 0) {
    if(argv[0].includes('filter')) {
        filter += argv[0].split(':')[0]
        opr += argv[0].split(':')[1]
        argv[0] = filter
        check = true
    }   
    switch(argv[0]) {
        case 'help' : Controller.help();break
        case 'list' : Controller.list();break
        case 'findById' : Controller.findId(argv[1]);break
        case 'add' : Controller.add(argv[1]);break
        case 'delete' : Controller.delete(argv[1]);break
        case 'complete' : Controller.complete(argv[1]);break
        case 'uncomplete' : Controller.uncomplete(argv[1]);break
        case 'list:created' : Controller.sortByDate(argv[1]);break
        case 'list:completed' : Controller.listCompleted(argv[1]);break
        case 'tag' : Controller.addTag(argv[1],tag);break
        case 'filter' : Controller.filter(opr);break
        default : Controller.help();break
    }
} else {
    Controller.help()
}



