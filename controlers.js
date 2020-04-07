
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
    return data
}

const add =(dataTambah) =>{
    model.create(dataTambah)
    view.suksusTambah(dataTambah)
}

const findById = (id) =>{
    let data = model.read();
    findData = data[id].kegiatan
    view.showTodo(id,findData)
}



module.exports= {
    listHelp,
    listToDo,
    add,
    findById
}

// console.log(listToDo())