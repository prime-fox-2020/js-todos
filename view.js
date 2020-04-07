class View {
    constructor() {

    }
    static help() {
        console.log('Pilih salat satu command di bawah ini! ');
        console.log(' ');
        console.log('node todo.js help');
        console.log('node todo.js list');
        console.log('node todo.js add <task_content>');
        console.log('node todo.js findById <task_id>');
        console.log('node todo.js delete <task_id>');
        console.log('node todo.js complete <task_id>');
        console.log('node todo.js uncomplete <task_id>');
        console.log('node todo.js list:outstanding asc|desc');
        console.log('node todo.js list:completed asc|desc');
        console.log('node todo.js tag <task_id> <tag_name>');
        console.log('node todo.js filter: <tag_name>');
        console.log(' ');
    }
    static list(data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i]['completed'] === true) {
                console.log(`${i + 1}. [x] ${data[i]['task']}`);
            } else {
                console.log(`${i + 1}. [ ] ${data[i]['task']}`);
            }
        }
    }
    static add(task_content) {
        console.log(`"${task_content}" telah ditambahkan`);
    }
    static contentById(data, id) {
        let taskId = Number(id - 1);
        console.log(`${id}. ${data[taskId]['task']}`);
    }
    static delete(data, task_content) {
        console.log(`Deleted "${data[Number(task_content - 1)]['task']}" dari list`);
    }
    static completed(data, id) {
        let taskId = Number(id - 1);
        console.log(`"${data[taskId]['task']}" marked as complete`);
    }

    static uncomplete(data, id) {
        let taskId = Number(id - 1);
        console.log(`"${data[taskId]['task']}" marked as uncomplete`);
    }

    static sortedAscending(data) {
        let sorted = data.sort((a, b) => a['created_date'] > b['created_date']);
        console.log(`Sorted from oldest to newest:`);
        for (var i = 0; i < sorted.length; i++) {
            console.log(`${i + 1}. ${sorted[i]['task']}`);
        }
    }

    static sortedDescending(data) {
        let sorted = data.sort((a, b) => a['created_date'] < b['created_date']);
        console.log(`Sorted from newest to oldest:`);
        for (var i = 0; i < sorted.length; i++) {
            console.log(`${i + 1}. ${sorted[i]['task']}`);
        }
    }
    static completedAscending(data) {
        let filter = data.filter(element => element['completed'] === true);
        let sorted = filter.sort((a, b) => a['created_date'] > b['created_date']);
        console.log(`Sorted completed task from oldest to newest:`);
        for (var i = 0; i < sorted.length; i++) {
            console.log(`${i + 1}. ${sorted[i]['task']}`);
        }
    }

    static completedDescending(data) {
        let filter = data.filter(element => element['completed'] === true);
        let sorted = filter.sort((a, b) => a['created_date'] < b['created_date']);
        console.log(`Sorted completed task from newest to oldest:`);
        for (var i = 0; i < sorted.length; i++) {
            console.log(`${i + 1}. ${sorted[i]['task']}`);
        }
    }
    static tagger(data, task_content, tag) {
        console.log(`You just tag "${data[Number(task_content) - 1]['task']}" with: ${tag}`);
    }

}

module.exports = View