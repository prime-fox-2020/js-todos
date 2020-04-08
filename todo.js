const Controller = require('./controller')

let argv = process.argv.slice(2)
let command = argv[0]
let input = argv[1]
switch(command){
    case 'help' : Controller.viewHelp(); break
    case 'list' : Controller.readList(); break
    case 'add' : Controller.addList(input); break
    case 'findById' : Controller.findById(input); break
    case 'delete' : Controller.deleteData(input); break
    case 'complete' : Controller.completeDataStatus(input); break
    case 'uncomplete' : Controller.uncompleteDataStatus(input); break
    case 'list:created' : Controller.listDataByCreate(input); break
    case 'list:completed' : Controller.listDataByComplete(input); break
    default : Controller.viewHelp(); break
}
