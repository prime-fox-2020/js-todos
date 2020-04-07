
const fs =require(`fs`);

class Model{
    constructor(id,kegiatan,status=false,
        date= new Date().getDate(), complete = null,
        tag='undifined'){
        this.id =id
        this.kegiatan = kegiatan
        this.status = status
        this.Creat_date = date
        this.Complete_date =complete
        this.tag = tag
    }
    static read(){
        let data = fs.readFileSync(`./data.json`,`utf8`)
        data =JSON.parse(data)
        
        return data
    }
    
    static create(dataTambah){
        let data = Model.read()
        let result = new Model(data.length+1,dataTambah)
        data.push(result)
        fs.writeFileSync(`./data.json`,JSON.stringify(data,null,2),`utf8`)
        return result
    }

    static hapus(dataBaru){
        fs.writeFileSync(`./data.json`,JSON.stringify(dataBaru,null,2),`utf8`)
        return dataBaru
    }

    static status(dataBaru){
        fs.writeFileSync(`./data.json`,JSON.stringify(dataBaru,null,2),`utf8`)
        return dataBaru
    }
}

undefined
// console.log(Model.read())

module.exports = Model