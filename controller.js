const View = require('./view')
const Model = require('./model')

class Controller {
    constructor(params) {

    }

    static list() {
        let data = Model.list()
        View.list(data)
    }

    static add(task) {
        let data = Model.add(task)
        View.add(data)
    }

    static findById(id) {
        let data = Model.findById(id)
        View.findById(data)
    }

    static delete(id) {
        let data = Model.delete(id)
        View.delete(data)
    }

    static complete(id) {
        let data = Model.complete(id)
        View.list(data)
    }

    static uncomplete(id) {
        let data = Model.uncomplete(id)
        View.list(data)
    }

    static created_date(sort) {
        let data = Model.created_date(sort)
        View.list(data)
    }

    static completed_date(sort) {
        let data = Model.completed_date(sort)
        View.list(data)
    }

    static tag(cmd) {
        let data = Model.tag(cmd)
        View.tag(data)
    }

    static filter(cmd) {
        let data = Model.filter(cmd)
        View.filter(data)
    }
}

module.exports = Controller