const Model = require('./model.js');
const View = require('./view.js');

class Controller {
    static read() {
        let data = Model.read();
        View.show(data);
    }

    static help() {
        View.help();
    }

    static list() {
        let data = Model.read();
        View.list(data);
    }

    static add(data) {
        let newData = Model.add(data);
        View.success(`sukes menambahkan (id: ${newData[newData.length - 1].id}) ${newData[newData.length-1].task} ke TODO list`);
    }

    static findByID(data) {
        let list = Model.read();
        for (let a in list) {
            if (list[a].id == data) {
                View.success(`${list[a].id}. ${list[a].task}`);
            }
        }
    }

    static delete(data) {
        let deletedData = Model.delete(data);
        View.success(`Deleted "${deletedData}" from TODO list`);
    }

    static complete(data) {
        Model.complete(data);
    }

    static uncomplete(data) {
        Model.uncomplete(data);
    }
}

module.exports = Controller;