class View{
    static help(list){
        console.log(list);
    }

    static list(data){
        console.log('=-=-=-LIST OF TASKS-=-=-=')
        data.forEach(el => {
            console.log(`${el.id}. [${el.status === 'complete' ? 'X' : ' '}] ${el.task}`);
        });
    }

    static add(data){
        console.log(`Added "${data}" to your TODO list...`);
    }

    static findById(data){
        if(typeof data === 'boolean'){
            console.log('Wrong Id Number!');
        } else {
            console.log('Your searching id is:');
            console.log(`${data.id}. ${data.task}`);
        }
    }

    static delete(data){
        if(typeof data === 'boolean'){
            console.log('Wrong Id Number!');
        } else {
            console.log(`Deleted "${data.task} from your TODO list..."`);
        }
    }

    static tag(data, tag){
        console.log(`Tagged task "${data.task}" with tags : ${tag}`);
    }
}

module.exports = View;