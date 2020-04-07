let View = require("../view/view.js")
let Model = require("../model/model.js").Model

class Controller {

  static help(listcommands){
    View.viewHelp(listcommands)
  } 

  static show() {
    var GG = Model.modelshow()
    View.viewShow(GG)
  }
      
  static add(name,jobToDo,sTatus) {
    Model.add(name,jobToDo,sTatus);
  }
  
  static showById(index) {
    var GG = Model.modelshow()
    View.viewShowById(GG, index)
  }

  static delete(id) {
    Model.delete(id);
  }
  
  static complete(id) {
    Model.complete(id);
  }

  static incomplete(id) {
    Model.incomplete(id);
  }
}

module.exports = Controller;