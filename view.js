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

    static findById(data){
        if(typeof data === 'boolean'){
            console.log('Wrong Id Number!');
        } else {
            console.log('Your searching id is:')
            console.log(`${data.id}. ${data.task}`);
        }
    }
}

module.exports = View