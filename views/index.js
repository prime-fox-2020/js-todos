let fs = require('fs');

class View {
    static showList(list) {

        if (list.length === 0) {
            console.log('There is no list');
            return;
        }

        for (let x = 0; x < list.length; x++) {
            let displayed = `${list[x].task_id}. [${list[x].complete === true ? 'X' : ' '}] ${list[x].task}`;
            for (let y = 0; y < list[x].tag.length; y++) {
                if (y === 0) displayed += ' [';
                displayed += list[x].tag[y];
                if (y !== list[x].tag.length - 1) displayed += ', ';
                else displayed += ']';
            }
            console.log(displayed);

        }
    }

    static showMessage(input) {
        console.log(input);
    }

    static displayById(input) {
        console.log(`${input.task_id}. [${input.complete === true ? 'X' : ' '}] ${input.task}`);
    }

    static help() {
        fs.readFile('./help.txt', 'utf8', (err, data) => {
            if (err) {
                throw err;
            } else {
                console.log(data)
                return;
            }
        })
    }

}

module.exports = View;