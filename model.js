let fs = require('fs')
class Model {
    constructor(task, id){
        this.id = id
        this.task = task
        this.status = 'Uncomplete'
        this.dateCreated = new Date();
        this.dateCompleted = ''
        this.tags = []
    }
    static readList(){
        let data = fs.readFileSync('./data.json', 'utf8')
        data = JSON.parse(data)
        let dataList = ''
        for(let a = 0; a < data.length; a++){
            let checked = ''
            if(data[a].status === 'Uncomplete'){
                checked = '[]'
            } else {
                checked = '[v]'
            }
            dataList += (`${data[a].id}. ${data[a].task} ${checked}\n`)
        }
        return dataList
    }

    static addTask(task){
        let data = fs.readFileSync('./data.json', 'utf8');
        data = JSON.parse(data);
        data.push(new Model(task, String(data.length+1)));
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    }

    static findId(id){
        let data =  fs.readFileSync('./data.json', 'utf8')
        data = JSON.parse(data)
        let dataList = ''
        for(let a = 0; a < data.length; a++){
            let checked = ''
            if(data[a].status === 'Uncomplete'){
                checked = '[]'
            } else {
                checked = '[v]'
            }
            if(data[a].id === id){
                dataList += (`${data[a].id}. ${data[a].task} ${checked}\n`)
            }
        }

        return dataList
    }

    static delete(id){
        let data =  fs.readFileSync('./data.json', 'utf8')
        data = JSON.parse(data)
        for(let a = 0; a < data.length; a++){
            if(data[a].id === id){
                data.splice(a,1)
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    }

    static complete(id){
        let data =  fs.readFileSync('./data.json', 'utf8')
        data = JSON.parse(data)
        let dataList = ''
        for(let a = 0; a < data.length; a++){
            if(data[a].id === id){
                data[a].status = "Completed"
                data[a].dateCompleted = new Date();
            }

            let checked = ''
            if(data[a].status === 'Uncomplete'){
                checked = '[]'
            } else {
                checked = '[v]'
            }
            if(data[a].id === id){
                dataList += (`${data[a].id}. ${data[a].task} ${checked}\n`)
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
        return dataList
    }

    static uncomplete(id){
        let data =  fs.readFileSync('./data.json', 'utf8')
        data = JSON.parse(data)
        let dataList = ''
        for(let a = 0; a < data.length; a++){
            if(data[a].id === id){
                data[a].status = "Uncomplete"
                data[a].dateCompleted = ""
            }

            let checked = ''
            if(data[a].status === 'Uncomplete'){
                checked = '[]'
            } else {
                checked = '[v]'
            }
            if(data[a].id === id){
                dataList += (`${data[a].id}. ${data[a].task} ${checked}\n`)
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
        return dataList
    }

    static sortListDate(option){
        let data =  fs.readFileSync('./data.json', 'utf8')
        data = JSON.parse(data)
        let dataList = ''
        if(option === "asc"){
            data.sort((a, b) => (a.dateCreated > b.dateCreated) ? 1 : -1)
        } else if (option === "desc"){
            data.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1)
        }

        for(let b = 0; b < data.length; b++){
            let checked = ''
            if(data[b].status === 'Uncomplete'){
                checked = '[]'
            } else {
                checked = '[v]'
            }
            dataList += (`${data[b].id}. ${data[b].task} ${checked}\n`)
        }
        return dataList
    }

    static sortCompletedDate(option){
        let data =  fs.readFileSync('./data.json', 'utf8')
        data = JSON.parse(data)
        let dataList = ''
        let flag = false
        if(option === "asc"){
            data.sort((a, b) => (a.dateCreated > b.dateCreated) ? 1 : -1)
        } else if (option === "desc"){
            data.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1)
        }
        for(let b = 0; b < data.length; b++){
            if(data[b].status === 'Completed'){
                dataList += (`${data[b].id}. ${data[b].task} [v]\n`)
            }
        }
        return dataList
    }

    static tag(id, tags){
        let data = fs.readFileSync('./data.json', 'utf8');
        data = JSON.parse(data);
        for(let a = 0; a < data.length; a++){
            if(data[a].id === id){
                for(let b = 0; b < tags.length; b++){
                    data[a].tags.push(tags[b])
                }
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    }

    static filter(tag){
        let data = fs.readFileSync('./data.json', 'utf8');
        data = JSON.parse(data);
        let dataList = ''
        for(let a = 0; a < data.length; a++){
            for(let b = 0; b < data[a].tags.length; b++){
                if(data[a].tags[b] === tag){
                    let checked = ''
                    if(data[a].status === 'Uncomplete'){
                        checked = '[]'
                    } else {
                        checked = '[v]'
                    }
                    dataList += (`${data[b].id}. ${data[b].task} ${checked}\n`)
                }
            }
        }
        return dataList
    }
}

module.exports = Model