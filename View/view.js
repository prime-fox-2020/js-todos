const Model = require('../Model/model.js')

class View {
    static kosong(message) {
        console.log(message)
    }

    static help(helpList) {
        for (let i in helpList) {
            console.log(helpList[i]);
        }    
    }

    static list(dataArr) {
        for (let i = 0; i < dataArr.length; i++) {
            console.log(`${dataArr[i].id}.  ${dataArr[i].status}  ${dataArr[i].task}`);
        }
    }

    static add(addedTask) {
        console.log(`Sukses menambahkan, "${addedTask[addedTask.length -1].task}" ke aplikasi TODO list ...`);
    }

    static findById(taskId) {
        console.log(taskId);
    }

    static delete(deletedTask) {
        console.log(deletedTask)
    }

    static complete(allData) {
        console.log(allData[1]);
        console.log("\n");
        this.list(allData[0]);
    }
    
    static uncomplete(allData) {
        console.log(allData[1]);
        console.log("\n");
        this.list(allData[0]);
    } 
}

module.exports = View