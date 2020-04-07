class View {
    constructor(params) {

    }

    static list(data) {
        console.log('List To Do : ');
        data.forEach(el => {
            console.log(`${el.id} ${el.todo} ${el.task} `);
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
}

module.exports = View