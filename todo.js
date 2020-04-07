
controler = require(`./controlers.js`)
const argv = process.argv.slice(2)

switch(argv[0]){

    case `help`: controler.listHelp(); break
    case `list`: ; break
    case `add`: ; break
    case `findById`: ; break
    case `delete`: ; break
    case `complete`: ; break
    case `uncomplte`: ; break
    default: controler.listHelp() ; break 
    
}