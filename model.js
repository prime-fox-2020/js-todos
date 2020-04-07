const fs = require('fs')

class Todo {
    constructor(id, input, status = false){
        this.id = id
        this.input = input
        this.status =  status
    }


    static showList(){
        const datas = JSON.parse(fs.readFileSync('./data.json','utf8'))
        let result =[]
        for(let i = 0; i < datas.length; i++){
            result.push(new Todo(datas[i].id, datas[i].input, datas[i].status))
        }
        return result
    }


    static save(data){
        fs.writeFileSync('./data.json',JSON.stringify(data, null, 4))
    }


    static add(input){
        let datas = this.showList()
        let getId = datas.length + 1
        datas .push(new Todo(getId, input.toString()))

        let result = []
        for(let i = 0; i < datas.length; i++){
            let obj = {}
            obj.id = datas[i].id
            obj.input = datas[i].input
            obj.status = datas[i].status
            result.push(obj)
        }
        this.save(result)
    }

    static findById(input){
        let datas  = this.showList()
        for(let i = 0; i < datas.length; i++){
            if(Number(input) === datas[i].id){
                return datas[i]
            } 
        }
    }

    static delete(id){
        let datas  = this.showList()
        let obj = {}
        let data = []
        for(let i = 0; i < datas.length; i++){
            if(Number(id) !== datas[i].id){
                obj = {}
                obj.id = datas[i].id
                obj.input = datas[i].input
                obj.status = datas[i].status
                data.push(obj)
            }
        }
        this.save(data)
    }

    static complete(id){
        let datas = this.showList()
        datas [Number(id) - 1].status = true
        this.save(datas)
    }

    static uncomplete(id){
        let datas = this.showList()
        datas [Number(id) - 1].status = false
        this.save(datas )
    }
}


module.exports = Todo 