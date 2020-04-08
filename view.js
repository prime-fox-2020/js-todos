class View {
  static help(){
    console.log("node todo.js");
    console.log("node todo.js help");
    console.log("node todo.js list");
    console.log("node todo.js add <namaKegiatan>");
    console.log("node todo.js findById <taskID>");
    console.log("node todo.js delete <taskID>");
    console.log("node todo.js complete <taskID>");
    console.log("node todo.js uncomplete <taskID>");
  }

  // static list(daftarList) {
  //   console.log(daftarList);
  // }

  static list(daftarList) {
    for (let i = 0; i < daftarList.length; i++) {
      if (daftarList[i].status === true) {
        console.log(`${daftarList[i].taskID} [X] ${daftarList[i].namaKegiatan}`);
      } else {
        console.log(`${daftarList[i].taskID} [ ] ${daftarList[i].namaKegiatan}`);
      }
    }
  }

  static addTask(namaKegiatan) {
    console.log(`Berhasil menambahkan ${namaKegiatan} ke dalam To-Do-List `);
  }

  static success(data) {
    console.log(data);
  }

  static findById(taskID) {
    console.log(`Berhasil menemukan ${taskID} dari To-Do-List`);
  }

  static delete(taskID) {
    console.log(`Berhasil menghapus ${taskID} dari To-Do-List`);
  }

  static complete(taskID) {
    console.log(`Berhasil mengubah ${taskID} dari To-Do-List`);
  }

  static uncomplete(taskID) {
    console.log(`Berhasil mengubah ${taskID} dari To-Do-List`);
  }

}



module.exports = View;
