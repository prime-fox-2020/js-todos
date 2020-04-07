
const view= require('./views');
const model = require('./model');

const listHelp = () => {
    view.listHelp()
}

const listToDo = () =>{
    let data = model.read();
    for (let i = 0; i < data.length; i++) {
        let id = data[i].id
        let kegiatan = data[i].kegiatan
        view.showTodo(id,kegiatan)
    }

}



module.exports= {
    listHelp,
    listToDo

}