class View{
    constructor(number,list){
        this.number=number
        this.list=list
    }
    static help(){
        console.log('node todo.js')
        console.log('node todo.js help')
        console.log('node todo.js list')
        console.log('node todo.js add <task_content>')
        console.log('node todo.js delete <task_id>')
        console.log('node todo.js complete <task_id>')
        console.log('node todo.js uncomplete <task_id>')
    }
    static list(data){
        // for (let i = 0; i < data.length; i++) {
        //     console.log(`${data[i].id}. ${data[i].toDoList}`) 
        // }
        for (let i = 0; i < data.length; i++) {
            if(data[i].status=='complete'){
                console.log(`${data[i].id} [x] ${data[i].toDoList}`)
            }else {
                console.log(`${data[i].id} [ ] ${data[i].toDoList}`)
            }
        }
        return data
    }
    static add(data,list){
        data.push({['id'] : data.length+1,['toDoList']:list,['status']:'uncomplete',['tag']:[],['createdAt']:new Date,['completeAt']:''})
        console.log(data)
        console.log(`Added ${list} to your TODO list`)
        return data
    }
    static findById(data,id){
        console.log()
        let exist=false
        for (let i = 0; i < data.length; i++) {
            if(data[i].id==id){
                console.log(`${data[i].id}. ${data[i].toDoList}`) 
                exist=true
                break 
            }
        }
        if(exist==false){
            console.log(`Id tidak ada`)
        } 
    }
    static delete(data,id){
        console.log(`Deleted ${data[id-1].toDoList} from your TODO list`)
        delete data[id-1]
        let res=[]
        for (let i = 0; i < data.length; i++) {
            if(data[i]==null){
                continue
            }else{
                res.push(data[i])
                
            }
        }
        console.log(res)
        return res
    }
    static complete(data,id){
        for (let i = 0; i < data.length; i++) {
            if(data[i].id==id){
                data[i].status='complete'
                data[i].completeAt=new Date
            }
            if(data[i].status=='complete'){
                console.log(`${data[i].id} [x] ${data[i].toDoList}`)
            }else {
                console.log(`${data[i].id} [ ] ${data[i].toDoList}`)
            }
        }
        return data
    }
    static uncomplete(data,id){
        for (let i = 0; i < data.length; i++) {
            if(data[i].id==id){
                data[i].status='uncomplete'
            }
            if(data[i].status=='complete'){
                console.log(`${data[i].id} [x] ${data[i].toDoList}`)
            }else {
                console.log(`${data[i].id} [ ] ${data[i].toDoList}`)
            }
        }
        return data
    }
    static listCreateAt(data,sort){
        let res=data
        if(sort=='asc'){
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data.length-1; j++) {
                    if(new Date(res[j].createdAt)>new Date(res[j+1].createdAt)){
                        let temp=res[j]
                        res[j]=res[j+1]
                        res[j+1]=temp
                    }
                }
            }
        }
        else if(sort=='desc'){
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data.length-1; j++) {
                    if(new Date(res[j].createdAt)<new Date(res[j+1].createdAt)){
                        let temp=res[j]
                        res[j]=res[j+1]
                        res[j+1]=temp
                    }
                }
            }
        }else {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data.length-1; j++) {
                    if(new Date(res[j].createdAt)<new Date(res[j+1].createdAt)){
                        let temp=res[j]
                        res[j]=res[j+1]
                        res[j+1]=temp
                    }
                }
            }
        }
        console.log(res)
        return res
    }
    static listCompleteAt(data,sort){
        let res=[]
        for (let i = 0; i < data.length; i++) {
            if(data[i].status=='complete'){
                res.push(data[i])
            }
        }
        if(sort=='asc'){
            for (let i = 0; i < res.length; i++) {
                for (let j = 0; j < res.length-1; j++) {
                    if(new Date(res[j].completeAt)>new Date(res[j+1].completeAt)){
                        let temp=res[j]
                        res[j]=res[j+1]
                        res[j+1]=temp
                    }
                }
            }
        }else if(sort=='desc'){
            for (let i = 0; i < res.length; i++) {
                for (let j = 0; j < res.length-1; j++) {
                    if(new Date(res[j].completeAt)<new Date(res[j+1].completeAt)){
                        let temp=res[j]
                        res[j]=res[j+1]
                        res[j+1]=temp
                    }
                }
            }
        }else {
            for (let i = 0; i < res.length; i++) {
                for (let j = 0; j < res.length-1; j++) {
                    if(new Date(res[j].completeAt)<new Date(res[j+1].completeAt)){
                        let temp=res[j]
                        res[j]=res[j+1]
                        res[j+1]=temp
                    }
                }
            }
        }
        console.log(res)
        return res
    }
    static outStanding(data,sort){
        let res=data
        if(sort=='asc'){
            for (let i = 0; i < res.length; i++) {
                for (let j = 0; j < res.length-1; j++) {
                    if(new Date(res[j].createdAt)>new Date(res[j+1].createdAt)){
                        let temp=res[j]
                        res[j]=res[j+1]
                        res[j+1]=temp
                    }
                }
            }
        }else{
            for (let i = 0; i < res.length; i++) {
                for (let j = 0; j < res.length-1; j++) {
                    if(new Date(res[j].createdAt)<new Date(res[j+1].createdAt)){
                        let temp=res[j]
                        res[j]=res[j+1]
                        res[j+1]=temp
                    }
                }
            }
        }
        console.log(res)
        return res
    }
    static tag(data,id,tag,tag1,tag2,tag3){
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].tag.length; j++) {
                if(tag==data[id].tag[j]){
                    tag=undefined
                }
                if(tag1==data[id].tag[j]){
                    tag1=undefined
                }
                if(tag2==data[id].tag[j]){
                    tag2=undefined
                }
                if(tag3==data[id].tag[j]){
                    tag3=undefined
                } 
            }        
        }
        let temp=''
        for (let i = 0; i < data.length; i++) {
            if(data[i].id==id){
                if(tag!==undefined){
                    data[i].tag.push(tag)
                    temp+=tag.toString()+' '
                }
                if(tag1!==undefined){
                    data[i].tag.push(tag1)
                    temp+=tag1.toString()+' '
                }
                if(tag2!==undefined){
                    data[i].tag.push(tag2)
                    temp+=tag2.toString()+' '
                }
                if(tag3!==undefined){
                    data[i].tag.push(tag3)
                    temp+=tag3.toString()+' '
                }
                if(tag!==undefined||tag1!==undefined||tag2!==undefined||tag3!==undefined)
                {
                    console.log(`Tagged task ${data[i].toDoList} with tags: ${temp}`)
                }else {
                    console.log(`Tagged task ${data[i].toDoList} with tags: sudah ada nama tagnya`)
                }
                break
            } 
        }
        console.log(data)
        return data
    }
    static filter(data,filter){
        let res=[]
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].tag.length; j++) {
                if(data[i].tag[j]==filter){
                    res.push(data[i])
                }   
            }
        }

        res.sort((a,b)=> {
            return new Date(b.createdAt)-new Date(a.createdAt)
        });
        
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < res[i].tag.length; j++) {
                if(res[i].tag[j]==filter){
                    console.log(`${res[i].id}. ${res[i].toDoList} [${res[i].tag}]`)
                    break
                }   
            }
        }
    }
}

module.exports=View