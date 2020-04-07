
controler = require(`./controlers.js`)
const argv = process.argv.slice(2)
let kalimat=``;
if(argv[2] != undefined){
    for (let i = 2; i < argv.length; i++) {
        kalimat += argv[i] +' '
    }
}

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

    case `list:complete`:
        if(argv[1]==`desc`){
            controler.completeDate(argv[1])
        }else{
            controler.completeDate(argv[1])
        } ; break
    case `tag`:controler.tag(argv[1],kalimat) ; break
    case `filter:`:controler.filterTag(argv[1]) ; break
    default: controler.listHelp(); break

}

// untuk filter tag : $ node todo.js filter: kerjaan

