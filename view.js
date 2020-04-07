class View {
  static help() {
    console.log('List Command:')
    console.log('node todo.js                       # Menampilkan command apa saja yang tersedia')
    console.log('node todo.js help                  # Menampilkan command apa saja yang tersedia')
    console.log('node todo.js list                  # Melihat daftar TODO')
    console.log('node todo.js add <task_content>    # Menambahkan TODO ke dalam list')
    console.log('node todo.js findById <task_id>    # Melihat detail TODO sesuai `task_id` nya')
    console.log('node todo.js delete <task_id>      # Menghapus TODO sesuai dengan `task_id` nya')
    console.log('node todo.js complete <task_id>    # Menandai status TODO selesai')
    console.log('node todo.js uncomplete <task_id>    # Menandai status TODO belum selesai')
  }

  static commandNotFound() {
    console.log('Perintah tidak ditemukan');
  }

  static displayTodo(list) {
    for (let i = 0; i < list.length; i++) {
      console.log(`${list[i].id}. ${list[i].status ? '[X]':'[ ]'} ${list[i].task}`);
    }
  }

  static infoAdd(text) {
    console.log(`Added "${text}" to your TODO list`);
  }

  static fromId(list, id) {
    for (let i = 0; i < list.length; i++) {
      if (id == list[i].id) {
        console.log(`${list[i].id}. ${list[i].status ? '[X]':'[ ]'} ${list[i].task}`);
      }
    }
  }

  static delete(task) {
    console.log(`Deleted "${task}" from your TODO list`);
  }
}

module.exports = View;