const fs = require('fs')

// const view = fs.readFile('./view.js')

class Model {
    constructor (id, task) {
        this.id = id
        this.task = task;
        this.status = 'uncomplete';
        this.date = new Date();
        this.dateCompleted = ''
        this.tags = [];
    }
    static displayList () {
        let data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        // console.log(data);
        let strData = ''
        for (let i = 0; i < data.length; i++) {
            // 1. Bikin aplikasi [ ]
            let centang = '';
            if (data[i].status == 'uncomplete') {
                centang = '[]'
            }
            else {
                centang = '[x]'
            }
            strData += `${data[i].id}. ${data[i].task} ${centang} \n`;
        }
        return strData;
    }
    static addTask (newTask) {
        let data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        data.push(new Model(String(data.length+1), newTask));
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    }
    static findById (TaskId) {
        let data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let strData = ''
        for (let i = 0; i < data.length; i++) {
            // 1. Bikin aplikasi [ ]
            let centang = '';
            if (data[i].status == 'uncomplete') {
                centang = '[]'
            }
            if (data[i].id == TaskId) {
                strData += `${data[i].id}. ${data[i].task} ${centang}`;
            }
        }
        return strData;
    }
    static deleteTask (oldTask) {
        let data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == oldTask) {
                data.splice(i, 1);
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    }
    static completedTask (task) {
        let data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == task) {
                data[i].status = 'complete';
                data[i].dateCompleted = new Date();
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    }
    static uncompleteTask (task) {
        let data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == task) {
                data[i].status = 'uncomplete';
                data[i].dateCompleted = '';
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    }
    static sortByDate (date) {
        let data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        console.log(data)
        if (date == 'asc') {
            // console.log(data[1].date)
            data.sort((a, b) => (a.date > b.date) ? 1 : -1) // jika hasilnya 1 maka asc
        }
        else {
            data.sort((a, b) => (a.date < b.date) ? 1 : -1) // jika hasilnya -1 maka dsc
        }
        let strData = ''
        for (let i = 0; i < data.length; i++) {
            let centang = '';
            if (data[i].status == 'uncomplete') {
                centang = '[]'
            }
            else {
                centang = '[x]'
            }
            strData += `${data[i].id}. ${data[i].task} ${centang} \n`;
        }
        return strData;
    }
    static listCompletedTask (task) {
        let data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        // console.log(data)
        if (task == 'asc') {
            // console.log(data[1].date)
            data.sort((a, b) => (a.date > b.date) ? 1 : -1) // jika hasilnya 1 maka asc
        }
        else {
            data.sort((a, b) => (a.date < b.date) ? 1 : -1) // jika hasilnya -1 maka dsc
        }
        let strData = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].status == 'complete') {
                strData += `${data[i].id}. ${data[i].task} [x] \n`;
            }
        }
        return strData;
    }
    static tag (id, tag) {
        let data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        for (let i = 0; i < data.length; i++) {
            if(data[i].id == id) {
                for (let j = 0; j < tag.length; j++) {
                    data[i].tag.push(tag[b]);
                }
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));

    }
}

// Model.displayList()
module.exports = Model;