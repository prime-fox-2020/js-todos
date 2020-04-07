
controler = require(`./controlers.js`)
const argv = process.argv.slice(2)

switch(argv[0]){

    case `help`: controler.listHelp(); break
    case `list`: controler.listToDo() ; break
    case `add`: ; controler.add(argv[1]); break
    case `findById`:controler.findById(argv[1]) ; break
    case `delete`: ; break
    case `complete`: ; break
    case `uncomplte`: ; break
    default: controler.listHelp(); break 

}

// console.log(argv[1])