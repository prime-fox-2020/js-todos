const Model = require('./model')
const View = require('./view')

class Controller {

  static create(item) {
    Model.create(item)
  }

  static read() {
    Model.read()
  }

  static complete(id) {
    Model.complete(id)
  }

  static uncomplete(id) {
    Model.uncomplete(id)
  }

  static delete(id) {
    Model.delete(id)
  }

  static findById(id) {
    Model.findById(id)
  }

  static help() {
    View.help()
  }

  static errorCommand(cmd) {
    View.errorCommand(cmd)
  }
}

module.exports = Controller