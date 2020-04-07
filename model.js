
const fs =require(`fs`);

class Model{
    static read(){
        let data = fs.readFileSync(`./data.json`,`utf8`)
        data =JSON.parse(data)
        
        return data
    }   
}


// console.log(Model.read())

module.exports = Model