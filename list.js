const fs = require("fs");

class List {
  constructor(taskID, status, namaKegiatan) {
    this.taskID = taskID;
    this.status = status;
    this.namaKegiatan = namaKegiatan;
  }

  static list() {
    let list = fs.readFileSync("data.json", "utf8");
    let data = JSON.parse(list);
    return data;
  }

  static addTask(namaKegiatan) {
    let daftarList = List.list();
    let taskID;
    if (daftarList.length === 0) {
      taskID = 1;
    }
    else {
      taskID = (daftarList[daftarList.length-1].taskID)+1;
    }
    daftarList.push(new List(taskID, false, namaKegiatan));
    List.saved(daftarList);
  }

  static saved(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
  }

  static findById(taskID) {
    let daftarList = List.list();
    let found;
    for (let i = 0; i < daftarList.length; i++) {
      if (daftarList[i].taskID === taskID) {
        if (daftarList[i].complete) {
          found = `${daftarList[i].id}. [X] ${daftarList[i].namaKegiatan}`;
        }
        else {
          found = `${daftarList[i].id}. [ ] ${daftarList[i].namaKegiatan}`;
        }
        break;
      }
    }
    return found;
  }

  static deleteList(id) {
    let daftarList = List.list();
    const updateList = [];
    let deleted;
    let newID = 0;
    for (let i = 0; i < daftarList.length; i++) {
      if (daftarList[i].taskID === id) {
          deleted = daftarList[i];
          newID = i;
      }
      else {
        updateList.push(daftarList[i]);
      }
    }
    for (let j = newID; j < updateList.length; j++) {
      updateList[j].taskID--;
    }
    List.saved(updateList);
  }

  static completeList(taskID) {
    let daftarList = List.list();
    for (let i = 0; i < daftarList.length; i++) {
      if (daftarList[i].taskID == taskID) {
          daftarList[i].status = true;
      }
    }
    List.saved(daftarList);
    return daftarList;
  }

  static uncompleteList(taskID) {
    let daftarList = List.list();
    for (let i = 0; i < daftarList.length; i++) {
      if (daftarList[i].taskID == taskID) {
          daftarList[i].status = false;
      }
    }
    List.saved(daftarList);
    return daftarList;
  }

}

module.exports = List;
