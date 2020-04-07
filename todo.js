const Controller = require("./controller")

const welcome = process.argv
let command = welcome[2]
let taskIdOrContent = welcome[3]


if(command == "help"){
    Controller.help()
}else if(command == "list"){
    Controller.list()
}else if(command == "add"){
    Controller.add(taskIdOrContent)
}else if(command == "findById"){
    Controller.findById(taskIdOrContent)
}else if(command == "delete"){
    Controller.delete(taskIdOrContent)
}else if(command == "complete"){
    Controller.complete(taskIdOrContent)
}else if(command == "uncomplete"){
    Controller.uncomplete(taskIdOrContent)
}