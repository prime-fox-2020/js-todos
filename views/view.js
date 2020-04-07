
class View{
    static help(){
        console.log("node todo.js")
        console.log("node todo.js help")
        console.log("node todo.js list")
        console.log("node todo.js add")
        console.log("node todo.js findById")
        console.log("node todo.js delete")
        console.log("node todo.js complete")
        console.log("node todo.js uncomplete")
    }

    static list(listData){
        console.log("Ye-A-Ye :")
        for(let i=0; i<listData.length; i++){
            console.log(listData[i].task_id, listData[i].task)
        }
    }

    // static add(datas){
    //     console.log(`berhasil menambahkan ${datas}`)
    // }

    static findById(data){
        console.log(`${data.task_id}, ${data.task}`)
    }
}

module.exports = View