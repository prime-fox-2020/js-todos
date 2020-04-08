const Model = require('./model')
const View = require('./view')

class Controller{
    static viewHelp(){
        View.viewHelp()
    }
    static readList(){
        let data = Model.readList()
        View.viewData(data)
    }
    static addList(input){
        let addList = Model.createNewData(input)
        View.add(addList)
    }
    static findById(input){
        let findById = Model.findById(input)
        if (findById){
            View.showFindById(findById)
        } else {
            View.displayError("ID NOT FOUND")
        }
    }
    static deleteData(input){
        let deleteData = Model.deleteData(input)
        if (deleteData){
            View.deleteData(deleteData)
        } else {
            View.displayError('ID NOT FOUND')
        }
    }
    static completeDataStatus(input){
        let completeDataStatus = Model.completeDataStatus(input)
        if (completeDataStatus){
            View.completeDataStatus(completeDataStatus,input)
        } else {
            View.displayError("Failed to Update Status")
        }
    }
    static uncompleteDataStatus(input){
        let uncompleteDataStatus = Model.uncompleteDataStatus(input)
        if (uncompleteDataStatus){
            View.uncompleteDataStatus(uncompleteDataStatus,input)
        } else {
            View.displayError('Failed to Update Status')
        }
    }
    static listDataByCreate(input){
        let listDataByCreate = Model.listDataByCreate(input)
        View.viewDataByCreate(listDataByCreate)
    }
    static listDataByComplete(input){
        let listDataByComplete = Model.listDataByComplete(input)
        View.viewDataByComplete(listDataByComplete)
    }
}

module.exports = Controller