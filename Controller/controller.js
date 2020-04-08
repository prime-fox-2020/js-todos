const Model = require('../Model/model.js')
const View = require('../View/view.js')

class Controller {
    static kosong() {
        let emptyMessage = Model.kosong()
        View.kosong(emptyMessage)
    }

    static help() {
        let arrHelp = Model.help()
        View.help(arrHelp)
    }

    static list() {
        let data = Model.list()
        View.list(data)
    }

    static add(addCommand) {
        let dataAdded = Model.add(addCommand)
        View.add(dataAdded) 
    }

    static findById(findCommand) {
        let data = Model.findById(findCommand)
        View.findById(data)
    }

    static delete(deleteCommand) {
        let data = Model.delete(deleteCommand)
        View.delete(data)
    }

    static complete(completeCommand) {
        let data = Model.complete(completeCommand)
        View.complete(data)
    }

    static uncomplete(uncompleteCommand) {
        let data = Model.uncomplete(uncompleteCommand)
        View.uncomplete(data)
    }

    static createdDate(commandSort) {
        let data = Model.createdDate(commandSort)
        View.createdDate(data)
    }

    static completedDate(commandSort) {
        let data = Model.completedDate(commandSort)
        View.completedDate(data)
    }

    static tag(arrayInput) {
        let data = Model.tag(arrayInput)
        View.tag(data)
    }

    static filter(tags) {
        let data = Model.filter(tags)
        View.filter(data)
    }
}

module.exports = Controller