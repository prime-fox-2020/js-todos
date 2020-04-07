const fs = require('fs')

class Model{
    constructor(id,status,name,create_at,complete_at){
        this.id = id
        this.status = status
        this.name = name
        this.create_at = create_at
        this.complete_at = complete_at
    }
    
    static readList(){
        let data = JSON.parse(fs.readFileSync('./data.json','utf-8'))
        let listData = []
        for (let i = 0; i<data.length; i++){
            listData.push(new Model(data[i].id, data[i].status, data[i].name, data[i].create_at, data[i].complete_at))
        }
        return listData
    }
    static createNewData(inputUser){
        let listData = Model.readList()
        let date = new Date()
        let id
        if (listData.length === 0){
            id = 1
        } else {
            id = (listData[listData.length-1].id)+1
        }
        listData.push(new Model(id,false,inputUser,date,'-'))
        Model.saveData(listData)
        return listData
    }
    static saveData(data){
        fs.writeFileSync('./data.json',JSON.stringify(data,null,2),'utf-8')
    }
    static findById(inputUser){
        let listData = Model.readList()
        for (let i = 0; i<listData.length; i++){
            if (listData[i].id == inputUser){
                if (listData[i].status == true){
                    return `${listData[i].id}. [X] ${listData[i].name}`
                } else {
                    return `${listData[i].id}. [ ] ${listData[i].name}`
                }
            }
        }
        return false
    }
    static deleteData(inputUser){
        let listData = Model.readList()
        let updatedData = []
        let newId = 0
        let deletedData
        for (let i = 0; i<listData.length; i++){
            if (listData[i].id == inputUser){
                deletedData = listData[i]
                newId = i
            } else {
                updatedData.push(listData[i])
            }
        }
        for (let i = newId; i<updatedData.length; i++){
            updatedData[i].id--
        }
        Model.saveData(updatedData)
        return deletedData
    }
    static completeDataStatus(inputUser){
        let listData = Model.readList()
        for (let i = 0; i<listData.length; i++){
            if (listData[i].id == inputUser){
                listData[i].status = true
                listData[i].complete_at = new Date()
            }
        }
        Model.saveData(listData)
        return listData
    }
    static uncompleteDataStatus(inputUser){
        let listData = Model.readList()
        for (let i = 0; i<listData.length; i++){
            if (listData[i].id == inputUser){
                listData[i].status = false
                listData[i].complete_at = '-'
            }
        }
        Model.saveData(listData)
        return listData
    }
    static listDataByCreate(input){
        let listData = Model.readList()
        for (let i = 1; i<listData.length; i++){
            for (let j = 0; j<i; j++){
                if (input == 'desc'){
                    if (listData[i].create_at > listData[j].create_at){
                        var temp = listData[i]
                        listData[i] = listData[j]
                        listData[j] = temp
                    }
                } else {
                    if (listData[i].create_at < listData[j].create_at){
                        var temp = listData[i]
                        listData[i] = listData[j]
                        listData[j] = temp
                    }
                }
            }
        }
        return listData
    }
    static listDataByComplete(input){
        let listData = Model.readList()
        for (let i = 1; i<listData.length; i++){
            for (let j = 0; j<i; j++){
                if (input == 'desc'){
                    if (listData[i].complete_at > listData[j].complete_at){
                        var temp = listData[i]
                        listData[i] = listData[j]
                        listData[j] = temp
                    }
                } else {
                    if (listData[i].complete_at < listData[j].complete_at){
                        var temp = listData[i]
                        listData[i] = listData[j]
                        listData[j] = temp
                    }
                }
            }
        }
        return listData
    }
}

module.exports = Model