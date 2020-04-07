const Model = require('./model')
const View = require('./view')

class Controller {

  static create() {
    console.log('cret')
  }
  static read() {
    View.read()
  }
  static update() {
    console.log('upda')
  }
  static delete() {
    console.log('dele')
  }
  static errorCommand() {
    View.errorCommand()
  }
}

module.exports = Controller