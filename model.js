const fs = require('fs');

class Model {
  static list() {
    let dataList = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    for (let i = 0; i < dataList.length; i++) {
      dataList[i].id = i+1;
    }
    return dataList;
  }

  static add(task, list) {
    let now = new Date().getTime();
    let objTask = {task: task, id: list.length+1, status: false, created_date: now};
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

  static tag(id, list, tags) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == id) {
        list[i].tags = tags;
      }
    }

    this.writeFile(list);
    return [list.filter(li => li.id == id)[0].task, tags];
  }
}

module.exports = Model;