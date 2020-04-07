class View{
    static show(data){
        console.log(data)
    }
    static showListCommon(data){
        for(let i = 0; i < data.length; i++){
            console.log(`${data[i].id}. ${data[i].do}`)
        }
    }
    static showArray(data){
        for(let i = 0; i < data.length; i++){
            console.log(data[i])
        }
    }
    static showList(data){
        for(let i = 0; i < data.length; i++){
            if(data[i].complete){
                console.log(` ${data[i].id}. [X] ${data[i].do}`)
            }
            else{
                console.log(` ${data[i].id}. [ ] ${data[i].do}`)
            }
        }
    }
    static showWithDateCreated(data){
        for(let i = 0; i < data.length; i++){
            console.log(`${data[i].created_date} created - ${data[i].do}`)
        }
    }
    static showWithDateCompleted(data){
        for(let i = 0; i < data.length; i++){
            console.log(`${data[i].completed_date} completed - ${data[i].do}`)
        }
    }
    static errorMessage(){
        console.log('Command tidak ditemukan')
    }
}

module.exports = View