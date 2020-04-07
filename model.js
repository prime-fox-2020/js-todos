const fs=require('fs')
class Model{
    static read(){
        let data=fs.readFileSync('./data.json','utf8')
        data=JSON.parse(data)
        return data
    }
    static write(data){
        fs.writeFileSync('./data.json',JSON.stringify(data))
    }
}

module.exports=Model