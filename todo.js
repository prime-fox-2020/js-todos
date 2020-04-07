
let controller = require('./controller/controller.js')


let command = process.argv[2]

let input = process.argv.slice(3)




let listcommando = ['help','list','add <task_content>','find by id <task_id>', 'delete <task_id' , 
'complete <task_id' , 'uncomplete <task_id']

switch(command){
    case "help":
        controller.help(listcommando)
    case "show":
        controller.show()
    break;
    case "add":
        controller.add(input[0],input[1],input[2])
    break;
    case "delete":
        controller.delete(input[0])
    break;
}













    //input 0 = nama
    //input 1 = task




// if (command == "help"){
//     for(var i =0 ; i < listcommands.length ; i++){
//     console.log(`$ node todo.js ${listcommands[i]}`)}
// }





