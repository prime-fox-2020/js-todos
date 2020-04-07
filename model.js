const fs = require('fs');

class Model {
  static list() {
    let dataList = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    return dataList;
  }

  static add(task, list) {
    let objTask = {task: task, id: list.length+1, status: false};
    list.push(objTask);
    this.writeFile(list);
    return task;
  }

  static writeFile(list) {
    fs.writeFileSync('./data.json', JSON.stringify(list));
  }

  static delete(id, list) {
    const newList = list.filter(li => li.id != id);
    this.writeFile(newList);
    return list.filter(li => li.id == id)[0].task;
  }

  static changeStatus(id, list, status) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == id) {
        if (status) {
          list[i].status = true;
        } else {
          list[i].status = false;
        }
      }
    }
    this.writeFile(list);
  }
}

module.exports = Model;