const fs = require('fs')
let dataJson = fs.readFileSync('data.json')

class Task {
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
        console.log(' ');
    }
}
// Menjalankan Method Task Help
if (process.argv[2] === undefined) {
    console.log('Ketik "node todo.js help"!');
}
else if (process.argv[2] === ('help')) {
    Task.help()
} else {
    console.log('Command yang dimasukan salah!');
}
