let Model = require('./model')
let View = require('./view')
class Controller {
    static help(){
        View.help();
    }
    static showList(){
        let data = Model.readList();
        View.showList(data);
    }
    static addTask(task){
        Model.addTask(task);
        let data = Model.readList();
        View.showList(data);
    }
    static findId(id){
        let data = Model.findId(id);
        View.showList(data);
    }
    static delete(id){
        Model.delete(id);
    }
    static complete(id){
        let data = Model.complete(id);
        View.showList(data);
    }
    static uncomplete(id){
        let data = Model.uncomplete(id);
        View.showList(data);
    }
    static sortListDate(option){
        let data = Model.sortListDate(option);
        View.showList(data);
    }
    static sortCompletedDate(option){
        let data = Model.sortCompletedDate(option);
        View.showList(data);
    }
    static tag(id, tags){
        Model.tag(id, tags);
        View.tagDone();
    }
    static filter(tag){
        let data = Model.filter(tag);
        View.showList(data);
    }
}

module.exports = Controller