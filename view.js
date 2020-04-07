

class View {
    static help () {
        console.log('node todo.js');
        console.log('node todo.js help')
        console.log('node todo.js list')
        console.log('node todo.js add <task_content>')
        console.log('node todo.js findById <task_id>')
        console.log('node todo.js delete <task_id>')
        console.log('node todo.js complete <task_id>')
        console.log('node todo.js uncomplete <task_id>')
        console.log('node todo.js list:created <asc/dsc>')
        console.log('node todo.js list:completed <asc/dsc>')
    }
    static display (database) {
        console.log(database);
    }
}

// View.help()

module.exports = View