let fs = require('fs');

class Task {
    constructor(task_id, task, createdAt, complete, tag, completedAt) {
        this._task_id = task_id;
        this._task = task;
        this._complete = complete || false;
        this._tag = tag || [];
        this._createdAt = createdAt;
        this._completedAt = completedAt || null;
    }

    get task_id() {
        return this._task_id;
    }

    get task() {
        return this._task;
    }

    get complete() {
        return this._complete;
    }

    set complete(value) {
        this._complete = value;
    }

    get tag() {
        return this._tag;
    }

    set tag(value) {
        this._tag.push(value);
    }

    get createdAt() {
        return this._createdAt;
    }

    get completedAt() {
        return this._completedAt;
    }

    set completedAt(value) {
        this._completedAt = value;
    }

    static writeList(list) {

        let data = JSON.stringify(list, null, 2);
        fs.writeFileSync('./data.json', data);
    }

    static findAll() {
        let cache = [];
        let list = JSON.parse(fs.readFileSync(`./data.json`).toString());
        // console.log(list);
        for (let i = 0; i < list.length; i++) {
            let completedDate;

            if (list[i]._completedAt === null) {
                completedDate = null;
            } else {
                completedDate = new Date(list[i]._completedAt);
            }

            cache.push(new Task(list[i]._task_id, list[i]._task, new Date(list[i]._createdAt), list[i]._complete, list[i]._tag, completedDate));
        }
        // console.log(cache);
        return cache;
    }

    static findComplete() {
        let list = Task.findAll();

        let cache = [];

        for (let i = 0; i < list.length; i++) {
            if (list[i].complete === true) cache.push(list[i]);
        }

        cache.sort((a, b) => b.completedAt - a.completedAt);

        return cache;

    }

    static findOutstanding() {
        let list = Task.findAll();

        let cache = [];

        for (let i = 0; i < list.length; i++) {
            if (list[i].complete !== true) cache.push(list[i]);
        }

        cache.sort((b, a) => b.completedAt - a.completedAt);
        return cache;
    }


    static findOne(id) {
        let list = Task.findAll();

        for (let i = 0; i < list.length; i++) {
            if (list[i].task_id === id) return list[i];
        }

        return false;
    }

    static addTask(task) {
        let list = Task.findAll();
        let id = 1;
        if (list.length > 0) {
            id = list[list.length - 1]._task_id + 1;
        }

        list.push(new Task(id, task, new Date()));
        Task.writeList(list);
    }

    static deleteTask(num) {
        let list = Task.findAll();
        let exist = false;

        for (let i = 0; i < list.length; i++) {
            if (list[i].task_id === num) {
                exist = list[i].task;
                list.splice(i, 1);
                break;
            }
        }

        Task.writeList(list);
        return exist;
    }

    static cheked(num) {
        let task;

        let list = Task.findAll();

        for (let i = 0; i < list.length; i++) {
            if (list[i]._task_id === num) task = list[i];
        }


        task.complete = true;
        task.completedAt = new Date();
        this.writeList(list);
    }

    static unchecked(num) {
        let task;

        let list = Task.findAll();

        for (let i = 0; i < list.length; i++) {
            if (list[i].task_id === num) task = list[i];
        }

        task.complete = false;
        task.completedAt = null;
        this.writeList(list);
    }

    static addTag(id, tag) {
        let task;
        let succeded = []

        let list = Task.findAll();

        for (let i = 0; i < list.length; i++) {
            if (list[i].task_id === id) task = list[i];
        }
        for (let x = 0; x < tag.length; x++) {
            let exist = false;
            for (let y = 0; y < task.tag.length; y++) {
                if (task.tag[y] === tag[x]) {
                    exist = true;
                }
            }

            if (!exist) {
                task.tag = tag[x];
                succeded.push(tag[x]);
            }
        }

        this.writeList(list);
        return [task.task, succeded];
    }

    static filtered(value) {
        let list = Task.findAll();
        let filtered = [];
        let exist = false;

        for (let x = 0; x < list.length; x++) {
            exist = false;
            for (let y = 0; y < list[x].tag.length && !exist; y++) {
                if (list[x].tag[y] === value) exist = true;
            }

            if (exist) {
                filtered.push(list[x]);
            }
        }

        return filtered
    }
}

module.exports = Task;