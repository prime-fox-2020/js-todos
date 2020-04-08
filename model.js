const fs = require('fs')
let file = fs.readFileSync('./data.json')
file = JSON.parse(file)

class Model{
    static getFormatDate(){
        let dateObj = new Date()
        let year = dateObj.getFullYear()
        let month = dateObj.getMonth()
        if(month < 10){
            month = '0' + month
        }
        let day = dateObj.getDay()
        if(day < 10){
            day = '0' + day
        }
        let result = `${month}-${day}-${year}`
        return result
    }
    static readJSON(){
        return file
    }

    static add(todo){
        let date = Model.getFormatDate()
        file.push({"id" : file.length+1, "do" : todo, "complete" : false, "created_date" : date})
        fs.writeFileSync('./data.json', JSON.stringify(file, null, 2))
    }

    static find(TODOid){
        let data 
        for(let i = 0; i < file.length; i++){
            if(file[i].id === TODOid){
                if(file[i].complete){
                    data = `${file[i].id}. [X] ${file[i].do}`
                }
                else{
                    data = `${file[i].id}. [ ] ${file[i].do}`
                }
                break
            }
        }
        return data
    }
    static delete(id){
        const result = []
        let index = -1
        let todo 
        for(let i = 0; i < file.length; i++){
            if(file[i].id !== id){
                result.push(file[i])
            }
            if(file[i].id === id){
                todo = file[i].do
                index = i
            }
        }
        for(let i = index; i < file.length; i++){
            file[i].id--
        }
        fs.writeFileSync('./data.json', JSON.stringify(result, null, 2))
        return todo
    }
    static updateComplete(id){
        let date = Model.getFormatDate()

        for(let i = 0; i < file.length; i++){
            if(file[i].id === id){
                file[i].complete = true
                file[i].completed_date = date
                break
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(file, null, 2))
    }

    static updateUncomplete(id){
        for(let i = 0; i < file.length; i++){
            if(file[i].id === id){
                file[i].complete = false
                delete file[i].completed_date
                break
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(file, null, 2))
    }


    static findTODO(id){
        let data 
        for(let i = 0; i < file.length; i++){
            if(file[i].id === id){
                data = file[i].do
                break
            }
        }
        return data
    }

    static completedData(data){
        let result = []
        for(let i = 0; i < data.length; i++){
            if(data[i].complete){
                result.push(data[i])
            }
        }
        return result
    }

    static addTags(id, arg){
        for(let i = 0; i < file.length; i++){
            if(file[i].id === id){
                file[i].tags = arg
                break
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(file, null, 2))
    }

    static sortCreated(data, sort){
        for(let i = 0; i < data.length; i++){
            let obj = Object.assign({}, data[i])
            let index = i
            for(let j = i + 1; j < data.length; j++){
                let timestamp1 = Number(new Date(obj.created_date))
                let timestamp2 = Number(new Date(data[j].created_date)) 
                if(sort === 'asc'){
                    if(timestamp1 > timestamp2){
                        obj = data[j]
                        index = j
                    }
                }
                else{
                    if(timestamp1 < timestamp2){
                        obj = data[j]
                        index = j
                    }
                }
            }
            data[index] = data[i]
            data[i] = obj
        }
        return data
    }   

    static sortCompleted(data, sort){
        let result = []
        for(let i = 0; i < data.length; i++){
            if(data[i].complete){
                let obj = Object.assign({}, data[i])
                let index = i
                for(let j = i + 1; j < data.length; j++){
                    let timestamp1 = Number(new Date(obj.completed_date))
                    let timestamp2 = Number(new Date(data[j].completed_date)) 
                    if(sort === 'asc'){
                        if(timestamp1 > timestamp2){
                            obj = data[j]
                            index = j
                        }
                    }
                    else{
                        if(timestamp1 < timestamp2){
                            obj = data[j]
                            index = j
                        }
                    }
                }
                data[index] = data[i]
                data[i] = obj
                result.push(obj)
            }
        }
        return result
    }
    static filter(tag){
        let result = []
        for(let i = 0; i < file.length; i++){
            if(file[i].tags != null){
                if(file[i].tags.includes(tag)){
                    result.push(`${file[i].id}. ${file[i].do} [${file[i].tags.split(' ')}]`)
                }
            }
        }
        return result
    }
}

module.exports = Model