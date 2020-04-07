const fs = require('fs')

class Model{
    static help(cb){
        let node = 'node todo.js';

        cb('=-=-=-=-=-LIST OF COMMANDS-=-=-=-=-=')
        cb(node + ' help (show list of commands)');
        cb(node + ' list (show list of todo)');
        cb(node + ' add <task_content> (adding some task)');
        cb(node + ' findById <task_id> (finding some task)');
        cb(node + ' delete <task_id> (delete any task)');
        cb(node + ' complete <task_id> (completing some task)');
        cb(node + ' uncomplete <task_id> (uncomplete any task)');
    }

    static list(cb){
        fs.readFile('./data.json', (err, data) => {
            if(err) {
                cb(err, null);
            }
            data = JSON.parse(data);
            cb(null, data);
        })
    }

    static add(newTask, cb){
        this.list((err, data) => {
            if(err){
                cb(err, null);
            }
            data.push({
                id: data[data.length - 1].id + 1,
                task: newTask,
                status: 'Incomplete'
            })

            fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err) => {
                if(err) throw err;
            })

            cb(null, newTask);
        })
    }
}

module.exports = Model;