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
        
    }

    static showData(data) {
        for(let i = 0; i < data.length; i++) {
            console.log(`${data[i].id}. ${data[i].status} ${data[i].task}`)
        }
    }

    static successMsg(msg) {
        console.log(msg)
    }
}

module.exports = View