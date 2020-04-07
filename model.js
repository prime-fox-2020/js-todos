const Controller = require("./controller")
const fs = require("fs")
const data = fs.readFileSync("./data.json", "utf8")
const parsed = JSON.parse(data)
const stringi = JSON.stringify(parsed)
class Model {
    static list() {
        return parsed
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