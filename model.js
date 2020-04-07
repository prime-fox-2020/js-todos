const Controller = require("./controller")
const fs = require("fs")
const data = fs.readFileSync("./data.json", "utf8")
const parsed = JSON.parse(data)
const stringi = JSON.stringify(parsed)
class Model {
    static list(perintah = "created", tambahan = "asc") {
        let arr = []
        if(perintah == "created"){
            if(tambahan == "asc"){
                return parsed
            }else if(tambahan == "desc"){
                return parsed.reverse()
            }
        }else if(perintah == "completed"){
            if(tambahan == "asc"){
                for(let com of parsed){
                    if(com.complete){
                        arr.push(com)
                    }
                }
                return arr
            }else if(tambahan == "desc"){
                for(let com of parsed){
                    if(com.complete){
                        arr.push(com)
                    }
                }
                return arr.reverse()
            }
        }
    }
    static add(str){
        let obj = {"Id" : parsed.length+1,
                    "task" : str,
                    "complete" : false}
        parsed.push(obj)
        Model.save(JSON.stringify(parsed))
    }
    static findById(num) {
        for (let i = 0; i < parsed.length; i++) {
            if (parsed[i].Id == num) {
                return parsed[i].task
            }
        }
    }
    static delete(num) {
        let str = parsed[num-1].task
        parsed.splice(num-1,1)
        Model.save(JSON.stringify(parsed))
        return str
    }

    static complete(num){
        for (let i = 0; i < parsed.length; i++) {
            if(parsed[i].Id == num){
                parsed[i].complete = true
            }
        }
        Model.save(JSON.stringify(parsed))
        return parsed
    }
    static uncomplete(num){
        for (let i = 0; i < parsed.length; i++) {
            if(parsed[i].Id == num){
                parsed[i].complete = false
            }
        }
        Model.save(JSON.stringify(parsed))
        return parsed
    }

    static save(data){
        fs.writeFileSync("./data.json", data)
    }
}

module.exports = Model