

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
        $node todo.js list:create
        $node todo.js list:complete
        $node todo.js tag <task_id> <tag_content>
        $node todo.js filter: <filter_content>
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

    static tag(kegiatan,kalimat){
        console.log(`Tagged task "${kegiatan}" with tags: ${kalimat}`)
    }

    static filterTag(kegiatanArr,kalimat,data){
        for (let i = 0; i < kegiatanArr.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if(data[j].kegiatan== kegiatanArr[i]){
                    console.log(`${data[j].id}. ${kegiatanArr[i]} [${data[j].tag}]`)
                } 
            }
        }
    }
    
}

module.exports = View