
let View = require("../view/view.js")
let Model = require("../model/model.js").Model
let Addparent = require("../model/model.js").Addparent

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

  static delete(id) {
    Model.delete(id);
    }
  }






module.exports = Controller;
