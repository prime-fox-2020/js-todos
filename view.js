class View {

    static help() {
        console.log('Command yang ada pada todo.js :');
        console.log('node todo.js help');
        console.log('node todo.js list');
        console.log('node todo.js add <task_content>');
        console.log('node todo.js findById <task_id>');
        console.log('node todo.js delete <task_id>');
        console.log('node todo.js complete <task_id>');
        console.log('node todo.js uncomplete <task_id>');
        console.log('node todo.js list:created asc|desc');
        console.log('node todo.js list:completed asc|desc');
        console.log('node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>');
        console.log('node todo.js filter:<tag_name>');
    }

    static showData(data) {
        for(let i = 0; i < data.length; i++) {
            console.log(`${data[i].id}. ${data[i].status} ${data[i].task}, Created date: ${data[i].created_date}, Completed date: ${data[i].completed_date}, Tag: ${data[i].tag}`)
        }
    }

    static successMsg(msg) {
        console.log(msg)
    }

    static filter(data) {
        for(let i = 0; i < data.length; i++) {
            console.log(`${data[i].id}. ${data[i].task} Tag: [${data[i].tag}]`)
        }
    }
}

module.exports = View