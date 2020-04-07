const Controller = require('./controller');

class View{
    static help(list){
        console.log(list);
    }

    static list(data){
        console.log('=-=-=-LIST OF TASKS-=-=-=')
        console.log(data)
    }

    static add(data){
        console.log(`Added "${data}" to your TODO list...`)
    }
}

module.exports = View