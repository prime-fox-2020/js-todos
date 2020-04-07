
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

const hapus = (id) =>{
    let data = model.read();
    let dataDelete = data[id-1].kegiatan
    let newData =[]
    let count = 0
    for (let i = 0; i < data.length; i++) {
        if(Number(id) -1 != i){
            count ++
            newData.push(new model(count, data[i].kegiatan))
        }
    }
    model.hapus(newData)

    view.suksesDelete(dataDelete)
    return newData
}


module.exports= {
    listHelp,
    listToDo,
    add,
    findById,
    hapus
}

// console.log(hapus(2))