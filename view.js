class View {
    static help(){
        console.log(`help: shows the available commands\nlist: check TODO list\nadd "task_content": add new task\nfindById "task_id": check the task based on the id\ndelete "task_id": delete the task based on the id\ncomplete "task_id": change the status of the task to 'Complete' based on the id\nuncomplete "task_id": change the status of the task to 'Uncomplete' based on the id\nlist:created "asc/desc": check TODO list based on the date created asc/desc`)
    }

    static showList(data){
        console.log(data)
    }
    static tagDone(){
        console.log('Insert tags done')
    }
}

module.exports = View