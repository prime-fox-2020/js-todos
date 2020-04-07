const fs = require('fs')

class Model {  
    constructor() {
        this.data = this.readData()
    }

    readData() {return JSON.parse(fs.readFileSync('data.json', 'utf8'))}

    writeData(data) {fs.writeFileSync('data.json',JSON.stringify(data))}

    listData() {
        let all_Data_Listed = []
        let status = false

        for (let i in this.data) {
            if (this.data[i].status === false || this.data[i].status === undefined) {
                status = '[ ]'
            } else {
                status = '[X]'
            }
            all_Data_Listed.push(`${this.data[i].id}. ${status} ${this.data[i].task}`)
        }
        return all_Data_Listed.join('\n')
    }

    add(input) {
        let id = null
        if (this.data.length === 0) {
            id = 1
        } else {
            id = this.data[this.data.length-1].id+1
        }

        let addData = {
            id: id,
            task: input,
            status: false,
            tag: [],
            createdAt: new Date()
        }

        this.data.push(addData)
        this.writeData(this.data)
        return `added ${input} to your to do list...`
    }

    findById(input) {
        for (let i in this.data) {
            if(this.data[i].id === Number(input)) {
                return `${this.data[i].id}. ${this.data[i].task}`
            }
        }
    }

    delete(input) {
        let want_To_Delete = []
        for (let i in this.data) {
            if(this.data[i].id === Number(input)) {
                want_To_Delete = this.data[i]
                this.data.splice(i,1)
            }
        }
        this.writeData(this.data)
        return `Deleted ${want_To_Delete.task} from your to do list...`
    }

    complete(input) {
        for (let i in this.data) {
            if (Number(input) === this.data[i].id) {
                this.data[i].status = true
            }
        }
        this.writeData(this.data)
        return this.listData()
    }

    uncomplete(input) {
        for (let i in this.data) {
            if (Number(input) === this.data[i].id) {
                this.data[i].status = false
            }
        }
        this.writeData(this.data)
        return this.listData()
    }

    listCreated(input) {
        if (input[0] === 'asc') {
            this.data.sort((a, b) => {return new Date(a.createdAt) - new Date(b.createdAt)})
        } else if (input[0] === 'desc') {
            this.data.sort((a, b) => {return new Date(b.createdAt) - new Date(a.createdAt)}) 
        }
        return this.listData()
    }

    listCompleted(input) {
        this.listCreated(input)
        for (let i in this.data) {
            if (this.data[i].status === false) {
                this.data.splice(i,1)
            }
        }
        return this.listData()
    }

    tag(input) { //:cry:
        return `new tag ${input} is added to tag data`
    }

    filter(input) { //:cry:
        return input
    }

}

module.exports = Model