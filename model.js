const fs = require('fs')

let dataJson = fs.readFileSync('./data.json')
let data = JSON.parse(dataJson)

class Model {
    constructor() {

    }

    static getData() {
        return data
    }

    static addData(task_content) {
        data.push({ "task": task_content })
        let finalData = JSON.stringify(data, null, 2)
        fs.writeFileSync('./data.json', finalData, 'utf8')
    }

    static deleteData(data, task_content) {
        data.splice((Number(task_content) - 1), 1);
        let finalData = JSON.stringify(data, null, 2);
        fs.writeFileSync('./data.json', finalData, 'utf8');
    }

    static completeData(data, task_content) {
        data[Number(task_content) - 1]['completed'] = true;
        let finalData = JSON.stringify(data, null, 2);
        fs.writeFileSync('./data.json', finalData, 'utf8');
    }

    static uncompleteData(data, task_content) {
        data[Number(task_content) - 1]['completed'] = false;
        let finalData = JSON.stringify(data, null, 2);
        fs.writeFileSync('./data.json', finalData, 'utf8');
    }
    static addTag(data, task_content, tag) {
        let id = Number(task_content) - 1;
        data[id]["tag"] = [tag];
        let finalData = JSON.stringify(data, null, 2);
        fs.writeFileSync('./data.json', finalData, 'utf8');
    }
}

module.exports = Model