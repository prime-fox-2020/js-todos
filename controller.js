const View = require("./view")
const Model = require("./model")

class Controller {
    static help(){
        View.help()
    }
    static list(perintah, tambahan){
        let result = Model.list(perintah, tambahan)
        View.list(result)
    }
    static add(str){
        Model.add(str)
        View.add(str)
    }
    static findById(num){
        let id = Model.findById(num)
        View.findById(id)
    }
    static delete(num){
        let str = Model.delete(num)
        View.delete(str)
    }
    static complete(num){
        let x = Model.complete(num)
        View.complete(x)
    }
    static uncomplete(num){
        let unX = Model.uncomplete(num)
        View.complete(unX)
    }
    static tag(id,tags){
        let tag = Model.tag(id,tags)
        View.tag(tag,tags)
    }
    static filter(keyword){
        let word = Model.filter(keyword)
        View.filter(word)
    }
}

module.exports = Controller