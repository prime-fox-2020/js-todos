const Model = require('./model')
const View = require('./view')

class Controller {
    static help() {
        View.help()
    }

    static list() {
        let data = Model.list()
        View.showData(data)
    }

    static findId(id) {
        let res = Model.findId(id)
        View.showData(res)
    }

    static add(task) {
        Model.add(task)
        View.successMsg(`Data ${task} berhasil ditambahkan`)
    }

    static delete(id) {
        let res = Model.delete(id)
        View.successMsg(`Deleted ${res} from your TODO list`)
    }

    static complete(id) {
        Model.complete(id)
        let data = Model.list()
        View.showData(data)
    }

    static uncomplete(id) {
        Model.uncomplete(id)
        let data = Model.list()
        View.showData(data)
    }

    static sortByDate(opr) {
        let data = Model.sortByDate(opr)
        View.showData(data)
    }

    static listCompleted(opr) {
        let data = Model.listCompleted(opr)
        View.showData(data)
    }

    static addTag(id, tag) {
        let data = Model.addTag(id, tag)
        View.successMsg(`Tagged task ${data[0].task} with tags: ${data[0].tag}`)
    }

    static filter(opr) {
        let data = Model.filter(opr)
        View.filter(data)
    }
}

module.exports = Controller