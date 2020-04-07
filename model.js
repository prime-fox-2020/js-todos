'use strict'

const fs = require('fs');

class List {
    static read() {
        return fs.readFileSync('./help.txt', 'utf8').split('\n');
    }
}

module.exports = List;