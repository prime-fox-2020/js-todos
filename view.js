'use strict';

class View {
    static printHelp(arr) {
        for (let i in arr) {
            console.log(arr[i]);
        }
    }

    static printList(obj) {
        for (let i in obj){
            console.log(`${i}. ${obj[i]}`);
        }
    }

    static addList(name) {
        console.log(`Added \"${name}\" to Your TODO list`);
    }

    static default() {
        console.log('Command tidak sesuai!');
    }
}

module.exports = View;