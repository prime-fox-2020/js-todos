class View {
    static message(message){
        console.log(message);
    }

    static showHelp() {
        console.log(`
        $ node todo.js
        $ node todo.js help
        $ node todo.js list
        $ node todo.js add <task_content>
        $ node todo.js findById <task_id>
        $ node todo.js delete <task_id>
        $ node todo.js complete <task_id>
        $ node todo.js uncomplete <task_id>
        $ node todo.js list:outstanding asc | desc
        $ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
        $ node todo.js filter:<tag_name>
        `)
    }
    static showList(list){
        for(let i = 0; i < list.length; i++){
            if(list[i].status === false) {
                console.log(`${list[i].id}. [ ] ${list[i].input}`)
            }else {
                console.log(`${list[i].id}. [x] ${list[i].input}`)
            }
        }
    }
    static findById(input){
        console.log(`${input.id}. ${input.input}`)
    }
    static createdAt(sort){
        for (let i = 0; i < sort.length; i++) {
            if(sort[i].status === false) {
                console.log(`${sort[i].id}. [ ] ${sort[i].input}`)
            }else {
                console.log(`${sort[i].id}. [x] ${sort[i].input}`)
            }
        }
    }
    static completed_date(sort){
        for (let i = 0; i < sort.length; i++) {
            if(sort[i].status === true) {
                console.log(`${sort[i].id}. [x] ${sort[i].input}`)
            }
        }
    }
    static filter(data){
        for (let i = 0; i < data.length; i++) {
            console.log(`${data[i].id}. ${data[i].input} [${data[i].tag}]`);
        }
    }
}

module.exports = View