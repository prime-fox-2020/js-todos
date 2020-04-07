const Controller = require('./controller')

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


}

module.exports = Model;