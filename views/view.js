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
        console.log("node todo.js list: created asc | desc")
        console.log("node todo.js list: completed asc | desc")
        console.log("node todo.js tag")
        console.log("node todo.js filter")
    }

    static list(listData){
        console.log("Ye-A-Ye :")
        for(let i=0; i<listData.length; i++){
            if(listData[i].status === false) {
                console.log(`${listData[i].task_id}.[ ], ${listData[i].task}`)
            } else {
                console.log(`${listData[i].task_id}.[X], ${listData[i].task}`)   
            }
        }
    }

    static findById(data){
        console.log(`${data.task_id}, ${data.task}`)
    }

    static delete(data) {
        console.log(`data has been deleted`)
    }

    static complete(data) {
        console.log('completed')
    }

    static uncomplete(data) {
        console.log('uncompleted')
    }

    static add(data) {
        console.log(`Added ${data} to your TODO list`)
    }

    static listcomplete(data) {
        console.log(`here we go :`)
        for(let i=0; i<data.length; i++){
            console.log(`${data[i].task_id} [X] ${data[i].task}`)
        }
    }

    static tag(datas) {
        console.log(datas.join(', '))
    }
    // static msg() {
    //     console.log('kamu siapa?')
    // }
}

module.exports = View