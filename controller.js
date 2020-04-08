const List = require('./list');
const View = require('./view');

class Controller {
  static help(){
    View.help();
  }

  static list() {
    let list = List.list();
    View.list(list);
  }

  static addTask(namaKegiatan) {
    List.addTask(namaKegiatan);
    View.addTask(namaKegiatan);
  }

  static findById(taskID) {
    let found = List.findById(taskID);
    View.success(found);
  }

  static delete(taskID) {
    List.deleteList(taskID);
    View.delete(taskID);
  }

  static complete(taskID) {
    List.completeList(taskID);
    View.complete(taskID);

  }

  static uncomplete(taskID) {
    List.uncompleteList(taskID)
    View.uncomplete(taskID);
  }


}

module.exports = Controller;
