const fs = require('fs')
let dataJson = fs.readFileSync('data.json')
let dataParsed = JSON.parse(dataJson)

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
    static list() {
        for (let i = 0; i < dataParsed.length; i++) {
            console.log(`${i + 1}: ${dataParsed[i].task}`);
        }
    }
    static add(input) {
        let stringed = input.toString()
        let tempAdd = {
            task: stringed
        }
        dataParsed.push(tempAdd)
        let stringfied = JSON.stringify(dataParsed)
        fs.writeFileSync('data.json', stringfied, 'utf8')
    }
    static findById(input) {
        let numbered = Number(input)
        console.log(`${1}: ${dataParsed[numbered - 1].task}`);
    }
    static delete(input) {
        let numbered = Number(input)
        console.log(`Menghapus ${dataParsed[numbered - 1].task} dari TODO List`);
        dataParsed.splice(numbered - 1, 1)

        let stringfied = JSON.stringify(dataParsed)
        fs.writeFileSync('data.json', stringfied, 'utf8')
    }
}
// Menjalankan Method Task Help
if (process.argv[2] === undefined) {
    console.log('Ketik "node todo.js help"!');
}
else if (process.argv[2] === 'help') {
    Task.help()
}
else if (process.argv[2] === 'list') {
    Task.list()
}
else if (process.argv[2] === 'add') {
    Task.add(process.argv[3])
}
else if (process.argv[2] === 'findByid') {
    Task.findById(process.argv[3])
}
else if (process.argv[2] === 'delete') {
    Task.delete(process.argv[3])
}
else {
    console.log('Command yang dimasukan salah!');
}
