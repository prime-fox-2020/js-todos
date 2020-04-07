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
    console.log('node todo.js uncomplete <task_id>  # Menandai status TODO belum selesai')
    console.log('node todo.js tag <task_id> <tags>  # Menambahkan Tag')
    console.log('node todo.js filter:<tag>          # Menampilkan daftar TODO berdasarkan tag')
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

  static sorted(task, par) {
    // default sort: ascending
    let sortedTask = task.sort((a,b) => a.created_date - b.created_date);
    if (par == 'desc') sortedTask = task.sort((a,b) => b.created_date - a.created_date);
    for (let i = 0; i < sortedTask.length; i++) {
      console.log(`${sortedTask[i].id}. ${sortedTask[i].status ? '[X]':'[ ]'} ${sortedTask[i].task}`);
    }
  }

  static completed(task, par) {
    // default sort: ascending
    let complete = task.filter(ta => ta.status == true);
    let uncomplete = task.filter(ta => ta.status == false);
    
    
    if (par == 'desc') {
      this.sorted(uncomplete);
      this.sorted(complete);
    } else {
      this.sorted(complete);
      this.sorted(uncomplete);
    }
  }

  static tagAdded(par) {
    console.log(`Tagged task "${par[0]}" with tags: ${par[1].join(' ')}`);
  }

  static filterTag(tag, list) {
    let tagged = list.filter(li => {
      for (let i = 0; i < li.tags.length; i++) {
        if (tag == li.tags[i]) return true;
      }
    });
    for (let i = 0; i < tagged.length; i++) {
      console.log(`${tagged[i].id}. ${tagged[i].task} [${tagged[i].tags.join(', ')}]`);
    }
  }
}

module.exports = View;