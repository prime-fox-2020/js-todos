

class View{
    static listHelp = () =>{
        console.log(
        `
        $node todo.js
        $node todo.js help
        $node todo.js list
        $node todo.js add <task_content>
        $node todo.js findById <task_id>
        $node todo.js delete <task_id>
        $node todo.js complete <task_id>
        $node todo.js uncomplete <task_id>
        `)
    }

    static showTodo(id,kegiatan){
        console.log(`${id}. ${kegiatan}`)
    }

    static suksusTambah(dataTambah){
        console.log(` added ${dataTambah} to your TODO list...`)
    }

    static suksesDelete(dataDelete){
        console.log(` Deleted "${dataDelete}" from your TODO list...`)
    }

    static status(id,status,keterangan){
        let tanda=`[ ]`
        if(status){
            tanda=`[X]`
        }else{
            tanda=`[ ]`
        }
        console.log(`${id}. ${tanda} ${keterangan}`)
    }
    
}

module.exports = View