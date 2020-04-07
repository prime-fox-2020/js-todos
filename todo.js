const Controller = require("./controller")

const welcome = process.argv
let command = welcome[2].split(":")[0]
let taskIdOrContent = welcome[3]
let perintah = welcome[2].split(":")[1]
let tag = welcome.slice(4)


if(command == "help"){
    Controller.help()
}else if(command == "list"){
    if(!perintah){
        Controller.list()
    }else if(perintah){
        Controller.list(perintah, taskIdOrContent)
    }
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
}else if(command == "tag"){
    Controller.tag(taskIdOrContent, tag)
}else if(command == "filter"){
    Controller.filter(perintah)
}