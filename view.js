class View {
  static print(str) {
      console.log(str)
  }

  static printArr(arr) {
      if(!Array.isArray(arr) || arr.length === 0){
          View.printEmpty()
      }
      else {
          for(let i = 0; i < arr.length; i ++) {
              console.log(`${i+1}. [${arr[i].done}] ${arr[i].task}   (id: ${arr[i].id})`)
          }
      }
  }

  static dateFormat(milliseconds) {
      const date = new Date(+milliseconds)
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      let ampm
      let hour
      if(date.getHours() > 12) {
          ampm = "pm"
          hour = date.getHours() - 12
      }
      else {
          ampm = "am"
          hour = date.getHours()
      }
      let dateAndTime = `${date.getDate()} ${months[date.getMonth()-1]}, ${hour}:${date.getMinutes()} ${ampm}`
      return dateAndTime
  }

  static printArrAndDate(arr, status, order) {
      if(!Array.isArray(arr) || arr.length === 0){
          View.printEmpty()
      }
      else {
          console.log(`${status} tasks, ${order}:`)
          for(let i = 0; i < arr.length; i ++) {
              console.log(`[${arr[i].done}] ${arr[i].task}   (Created at: ${View.dateFormat(arr[i].createdAt)}) (id: ${arr[i].id})`)
          }
      }
  }

  static printArrAndCompleted(arr, order) {
      if(!Array.isArray(arr) || arr.length === 0){
          View.printEmpty()
      }
      else {
          console.log(`Completed tasks, ${order}:`)
          for(let i = 0; i < arr.length; i ++) {
              console.log(`[${arr[i].done}] ${arr[i].task}   (Completed at: ${View.dateFormat(arr[i].completedAt)}) (id: ${arr[i].id})`)
          }
      }
  }

  static printAdd(str) {
      console.log(`Added "${str}" to your to-do list.`)
  }

  static printFind(obj) {
      console.log(`[${obj.done}] ${obj.task}   (id: ${obj.id})`)
  }

  static printDel(arr) {
      console.log(`Deleted "${arr[0].task}" from your to-do list.`)
  }

  static printNotFound() {
      console.log(`Error: Task not found`)
  }

  static printEmpty() {
      console.log(`List is empty`)
  }
}

module.exports = View 