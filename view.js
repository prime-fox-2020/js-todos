'use strict';

class View {
    static printHelp(arr) {
        for (let i in arr) {
            console.log(arr[i]);
        }
    }

    static printList(obj, sort, param) {
        if (sort !== undefined) {
            let arr = [];
            for (let i in obj) {
                param == 'create' ? arr.push(obj[i].createDate) : arr.push(obj[i].completeDate);
            }
            sort == 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
            for (let i in arr) {
                for (let j in obj) {
                    if (param == 'complete' && obj[j].status == '[x]' && obj[j].completeDate == arr[i]) {
                        console.log(`${j}. ${obj[j].status} ${obj[j].name} | complete date: ${obj[j].completeDate}`);
                    }
                    else if (param == 'create' && obj[j].createDate == arr[i]) {
                        console.log(`${j}. ${obj[j].status} ${obj[j].name} | create date: ${obj[j].createDate}`);
                    }

                }
            }
        }
        else {
            for (let i in obj) {
                console.log(`${i}. ${obj[i].status} ${obj[i].name}`);
            } 
        }
    }

    static updateList(name, task, tag) {
        switch (task) {
            case 'add': {
                console.log(`Added \"${name}\" to Your TODO list`);
                break;
            }
            case 'del': {
                console.log(`Deleted \"${name}\" from Your TODO list`);
                break;
            }
            case 'tag': {
                console.log(`Tagged task \"${name}\" with tags: ${tag}`);
                break;
            }
        }
    }

    static filter(obj, tag){
        for (let i in obj){
            if (obj[i].tag.indexOf(tag) !== -1) {
                console.log(`${i}. ${obj[i].status} ${obj[i].name} [${obj[i].tag}]`);
            }
        }
    }

    static find(obj, id) {
        console.log(`${id}. ${obj[id].status} ${obj[id].name}`);
    }

    static default() {
        console.log('Command tidak sesuai!');
    }
}

module.exports = View;