let fs = require('fs');

class ToDo{
    constructor(task_id, task, createdAt, complete = false, tag = [], completedAt = null){
        this._task_id = task_id
        this._task = task
        this._complete = complete
        this._tag = tag
        this._createdAt = createdAt
        this._completedAt = completedAt
    }

    //setter&getter
    get task_id(){return this._task_id}
    set task_id(p){this._task_id=p}
    get task(){return this._task_id}
    set task(p){this._task=p}
    get complete(){return this._complete}
    set complete(p){this._complete=p}
    get tag(){return this._tag}
    set tag(p){this._tag=p}
    get createdAt(){return this._createdAt}
    set createdAt(p){this._createdAt=p}
    get completedAt(){return this._completedAt}
    set completedAt(p){this._completedAt=p}
    
    
    static findAll(){
        let toDoList = []
        let list = JSON.parse(fs.readFileSync(`./data.json`).toString())
        for(let i = 0; i < list.length; i++){
            if(list[i]._completedAt === null){
                toDoList.push(new ToDo(list[i]._task_id, list[i]._task, new Date(list[i]._createdAt), list[i]._complete, list[i]._tag))
            }else{
                toDoList.push(new ToDo(list[i]._task_id, list[i]._task, new Date(list[i]._createdAt), list[i]._complete, list[i]._tag, new Date(list[i]._completedAt)))
            }
        }
        return toDoList
    }
    
    
    static writeList(list){
        let data = JSON.stringify(list, null, 2)
        fs.writeFileSync('./data.json', data)
    }


    static add(task){
        let list = ToDo.findAll()
        let id = 1
        let numberOfList = list.length
        if (numberOfList > 0) {
            id = list[numberOfList - 1]._task_id + 1
        }
        list.push(new ToDo(id, task, new Date()))
        ToDo.writeList(list)
    }


    static findByID(id) {
        let list = ToDo.findAll()
        for(let i = 0; i < list.length; i++){
            if(list[i].task_id === id){
                return list[i]
            }
        }
        return false
    }


    static delete(id){
        let list = ToDo.findAll()
        let willBeDeleted = false
        for(let i = 0; i < list.length; i++){
            if(list[i].task_id === id){
                willBeDeleted = list[i].task
                list.splice(i, 1)
                break
            }
        }
        ToDo.writeList(list)
        return willBeDeleted
    }


    
    static checking(num) {
        let list = ToDo.findAll()
        let task
        for(let i = 0; i < list.length; i++){
            if (list[i]._task_id === num){ 
                task = list[i]
            }
        }
        ToDo.complete = true
        task.completedAt = new Date()
        this.writeList(list)
    }


    static unchecking(num){
        let list = ToDo.findAll()
        let task
        for(let i = 0; i < list.length; i++){
            if (list[i].task_id === num){
                task = list[i]
            } 
        }
        ToDo.complete = false
        task.completedAt = null
        this.writeList(list)
    }


    static findComplete(){
        let list = ToDo.findAll()
        let listComplete = []
        for(let i = 0; i < list.length; i++){
            if (list[i].complete === true){
                listComplete.push(list[i])
            } 
        }
        listComplete.sort((a, b) => b.completedAt - a.completedAt)
        return listComplete
    }


    static findUncomplete(){
        let list = ToDo.findAll()
        let listUncomplete = []
        for(let i = 0; i < list.length; i++){
            if (list[i].complete !== true){
                listUncomplete.push(list[i])
            } 
        }
        listUncomplete.sort((b, a) => b.completedAt - a.completedAt)
        return listUncomplete
    }


    static addTag(id, tag){
        let list = ToDo.findAll()
        let success = []
        let task
        for(let i = 0; i < list.length; i++){
            if(list[i].task_id === id){
                task = list[i]
            } 
        }
        for(let x = 0; x < tag.length; x++){
            let isExist = false
            for (let y = 0; y < task.tag.length; y++){
                if (task.tag[y] === tag[x]){
                    isExist = true
                }
            }
            if (!isExist) {
                task.tag = tag[x]
                success.push(tag[x])
            }
        }
        this.writeList(list)
        return [task.task, success]
    }


    static filtered(value){
        let list = ToDo.findAll()
        let filtered = []
        let isExist = false
        for(let x = 0; x < list.length; x++){
            isExist = false;
            for (let y = 0; y < list[x].tag.length && !isExist; y++){
                if (list[x].tag[y] === value){
                    isExist = true
                }
            }
            if(isExist){
                filtered.push(list[x])
            }
        }
        return filtered
    }
}

module.exports = ToDo