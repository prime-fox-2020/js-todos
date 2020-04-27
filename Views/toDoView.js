'use strict'

class ToDoView {
  static showError () {
    console.log(`Invalid command! Please input a <command>, type "node todo.js help" for more information`)
  }

  static showHelp () {
    const command = [
      `$ node todo.js # will call help`,
      `$ node todo.js help # menampilkan command apa saja yang tersedia`,
      `$ node todo.js list # Melihat daftar TODO`,
      `$ node todo.js add <task_content> # Menambahkan TODO ke dalam list`,
      `$ node todo.js findById <task_id> # Melihat detail TODO sesuai 'task_id' nya`,
      `$ node todo.js delete <task_id> # Menghapus TODO sesuai 'task_id' nya`,
      `$ node todo.js complete <task_id> # Menandai status TODO selesai`,
      `$ node todo.js uncomplete <task_id> # Menandai status TODO belum selesai`,
      `$ node todo.js list:created <asc|desc> # Melihat daftar TODO yang sudah di sort`,
      `$ node todo.js list:completed <asc|desc> # Melihat daftar TODO yang sudah selesai`,
      `$ node todo.js tag <task_id> <tag_1> <tag_2> <....> # Memberikan tag pada TODO list`,
      `$ node todo.js filter:<tag> # Melakukan filter pada TODO list sesuai tag`

    ]
    console.log(`\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`)
    console.log(`┃  Listed Command for JS Todos  ┃`)
    console.log(`┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`)
    for (const key in command) {
      console.log(command[key])
    }
  }

  static displayToDoList (list) {
    console.log(`\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`)
    console.log(`┃      List of Things To Do     ┃`)
    console.log(`┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`)
    const result = []
    list.forEach(element => {
      const string = `${element.id}. [${(element.status === true) ? 'x' : ' '}] ${element.task} `
      result.push(string)
    })
    result.forEach(element => {
      console.log(element)
    })
  }

  static showResult (array, value) {
    if (value === 'list' || value === 'setStatus') {
      console.log(`\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`)
      console.log(`┃      List of Things To Do     ┃`)
      console.log(`┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`)
      const result = []
      array.forEach(element => {
        const string = `${element.id}. [${(element.status === true) ? 'x' : ' '}] ${element.task} `
        result.push(string)
      })
      result.forEach(element => {
        console.log(element)
      })
    } else if (value === 'add') {
      console.log(`Added "${array}" to your TODO list...`)
    } else if (value === 'findById') {
      const result = []
      array.forEach(element => {
        const string = `${element.id}.${element.task} `
        result.push(string)
      })
      result.forEach(element => {
        console.log(element)
      })
    } else if (value === 'delete') {
      console.log(`Deleted "${array}" from your TODO list...`)
    } else if (value === 'setComplete') {
      console.log(`Check "${array}" from your TODO list...`)
    }
  }
}

module.exports = ToDoView