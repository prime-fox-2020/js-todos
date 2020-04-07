const Controller = require("./controller")
const fs = require("fs")
const data = fs.readFileSync("./data.json", "utf8")
const parsed = JSON.parse(data)
// const stringi = JSON.stringify(parsed,null,3)
class Model {
    static list(perintah = "created", tambahan = "asc") {
        let arr = []
        if (perintah == "created") {
            if (tambahan == "asc") {
                return parsed
            } else if (tambahan == "desc") {
                return parsed.reverse()
            }
        } else if (perintah == "completed") {
            if (tambahan == "asc") {
                for (let com of parsed) {
                    if (com.complete) {
                        arr.push(com)
                    }
                }
                return arr
            } else if (tambahan == "desc") {
                for (let com of parsed) {
                    if (com.complete) {
                        arr.push(com)
                    }
                }
                return arr.reverse()
            }
        }
    }
    static add(str) {
        let obj = {
            "Id": parsed.length + 1,
            "task": str,
            "complete": false,
            "tags" : []
        }
        parsed.push(obj)
        Model.save(JSON.stringify(parsed,null,3))
    }
    static findById(num) {
        for (let i = 0; i < parsed.length; i++) {
            if (parsed[i].Id == num) {
                return parsed[i].task
            }
        }
    }
    static delete(num) {
        let str = parsed[num - 1].task
        parsed.splice(num - 1, 1)
        Model.save(JSON.stringify(parsed,null,3))
        return str
    }

    static complete(num) {
        for (let i = 0; i < parsed.length; i++) {
            if (parsed[i].Id == num) {
                parsed[i].complete = true
            }
        }
        Model.save(JSON.stringify(parsed,null,3))
        return parsed
    }
    static uncomplete(num) {
        for (let i = 0; i < parsed.length; i++) {
            if (parsed[i].Id == num) {
                parsed[i].complete = false
            }
        }
        Model.save(JSON.stringify(parsed,null,3))
        return parsed
    }
    static tag(id, tag) {
        let str = ""
        for (let i = 0; i < parsed.length; i++) {
            if (parsed[i].Id == id) {
                str+=parsed[i].task
                for (let j = 0; j < tag.length; j++) {
                    let check = true
                    for (let k = 0; k < parsed[i].tags.length; k++) {
                        if(parsed[i].tags[k] == tag[j])
                        check = false
                    }
                    if(check){
                        parsed[i].tags.push(tag[j])
                    }
                }
            }
        }
        Model.save(JSON.stringify(parsed,null,3))
        return str
    }
    static filter(keyword){
        let arr = []
        for (let i = 0; i < parsed.length; i++) {
            if(parsed[i].tags != undefined){
                // console.log(parsed[i].tags)
                for (let j = 0; j < parsed[i].tags.length; j++) {
                    if(parsed[i].tags[j] == keyword)
                        arr.push([parsed[i].Id, parsed[i].task, parsed[i].tags])
                }   
            }
        }
        return arr
    }

    static save(data) {
        fs.writeFileSync("./data.json", data)
    }
}

module.exports = Model