'use strict'

const fs = require('fs');

class Model {
    static readHelp() {
        return fs.readFileSync('./help.txt', 'utf8').split('\n');
    }

    static readList() {
        return JSON.parse(fs.readFileSync('./list.json', 'utf8'));
    }

    static addList(obj) {
        fs.writeFileSync('./list.json', JSON.stringify(obj, null, 4));
    }
}

module.exports = Model;