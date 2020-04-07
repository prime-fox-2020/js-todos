class View {

    static help(list){
        list.forEach(el => {
            console.log(el);
        });
    }

    static list(data) {
        console.log('List To Do : ');
        data.forEach(el => {
            console.log(el.id, el.todo, el.task, el.tag);
        });
    }

    static add(data) {
        console.log(`Added "${data.task}" to your TODO list...`);
    }

    static findById(el) {
        console.log(`${el.id} ${el.todo} ${el.task} `);
    }

    static delete(data) {
        console.log(`Deleted "${data.task}" to your TODO list...`);
    }

    static tag(data) {
        console.log(`Tagged task "${data.task}" with tags: ${data.tag}`);
    }

    static filter(data) {
        data.forEach(el => {
            console.log(el.id, el.task, el.tag);
        });
    }
}

module.exports = View