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
        View.successMsg(`Deleted ${res.task} from your TODO list`)
    }

}

module.exports = Controller