'use strict';

class View {
    static printHelp(arr) {
        for (let i in arr) {
            console.log(arr[i]);
        }
    }

    static printList(obj) {
        for (let i in obj) {
            console.log(`${i}. ${obj[i][0]} ${obj[i][1]}`);
        }
    }

    static updateList(name, task) {
        switch (task) {
            case 'add' : {
                console.log(`Added \"${name}\" to Your TODO list`);
                break;
            } 
            case 'del' : {
                console.log(`Deleted \"${name}\" from Your TODO list`);
                break;
            } 
        }
    }

    static find(obj, id) {
        console.log(`${id}. ${obj[id][0]} ${obj[id][1]}`);
    }

    static default() {
        console.log('Command tidak sesuai!');
    }
}

module.exports = View;