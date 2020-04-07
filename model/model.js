let fs = require('fs') /// gabisa diluar

class Model {
    constructor(
        // name,jobToDo,sTatus
        ){
        this.ID = 0
        this.nama = 2
        this.task = 3
        this.status = 4
        console.log(this.nama)

    }

    static data(){
    let fs = require('fs') /// gabisa diluar
    let Beta = fs.readFileSync('./data/data.json','utf8')
    let Gamma = JSON.parse(Beta)

    return Gamma
    }

    static modelshow(){
    return this.data()
    }

    static add(name,jobToDo,sTatus){
        let newTasks = this.data();
        
        newTasks.push({
            ID: Number(newTasks[newTasks.length - 1].ID) + 1,
            nama: name,
            task: jobToDo,
            status: sTatus!== undefined? sTatus:'Unimportant' ,
            category: 'Unimportant', 
            createdDate: new Date ,
          })
          let tasksString = JSON.stringify(newTasks, null, 4)
          
          fs.writeFileSync('./data/data.json',tasksString)
    }
    static delete(id){
        
        let nonDeletedTask = []
        let deletedTask = []
        let data = this.data()
        for (var i = 0 ; i < data.length ; i ++){
            if(Number(id) !== data[i].ID){
                nonDeletedTask.push(data[i])
            }else{
                deletedTask.push(data[i])
            }
        }
        
    }
}





// console.log(Ubah.Ubahkestring())

module.exports={Model,Addparent}