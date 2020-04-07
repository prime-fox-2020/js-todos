
controler = require(`./controlers.js`)
const argv = process.argv.slice(2)

switch(argv[0]){

    case `help`: controler.listHelp(); break
    case `list`: controler.listToDo() ; break
    case `add`: ; controler.add(argv[1]); break
    case `findById`:controler.findById(argv[1]) ; break
    case `delete`: controler.hapus(argv[1]) ; break
    case `complete`:controler.complete(argv[1]) ; break
    case `uncomplete`:controler.uncomplete(argv[1]) ; break
    case `list:create`:
        if(argv[1]==`desc`){
            controler.listCreate(argv[1])
        }else{
            controler.listCreate(argv[1])
        } ; break
    default: controler.listHelp(); break 

}
