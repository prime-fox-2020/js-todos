let Model = require("./model.js")
let View = require("./view.js")

class Controller {
    static process(input) {
        let command = input[0] || "help"
        command = command.toLowerCase()
        let argument = input[1]

        if(/list/i.test(command)) { // ----------------------------------- List varieties
            if(command === "list") { // -------------------------------------------- List
                View.printArr( Model.list() );
            }
            else if(/list:created/i.test(command)) {
                if(/asc/i.test(argument)){ // -------------------------- List:Created asc
                    let output = Model.showSorted("asc")
                    View.printArrAndDate(output, "All", "oldest first")
                }
                else { // --------------------------------------------- List:Created desc
                    let output = Model.showSorted("desc")
                    View.printArrAndDate(output, "All", "newest first")
                }
            }
            else if(/list:outstanding/i.test(command)) {
                if(/asc/i.test(argument)){ // ---------------------- List:Outstanding asc
                    let output = Model.showCompleteSorted("asc", "outstanding")
                    View.printArrAndDate(output, "Outstanding", "oldest first")
                }
                else { // ----------------------------------------- List:Outstanding desc
                    let output = Model.showCompleteSorted("desc", "outstanding")
                    View.printArrAndDate(output, "Outstanding", "newest fist")
                }
            }
            else if(/list:completed/i.test(command)) {
                if(/asc/i.test(argument)){ // ------------------------ List:Completed asc
                    let output = Model.showCompleteSorted("asc")
                    View.printArrAndCompleted(output, "oldest first")
                }
                else { // ------------------------------------------- List:Completed desc
                    let output = Model.showCompleteSorted("desc")
                    View.printArrAndCompleted(output, "newest first")
                }
            }
        }
        else if(command === "add") { // --------------------------------------------- Add
            if(argument == undefined) {
                View.print( `Error: Expected a string after 'add'` );
            }
            else {
                Model.add(argument)
                View.printAdd(argument)
            }
        }
        else if(command === "findbyid") { // ----------------------------------- FindById
            if(argument == undefined) {
                View.print( `Error: Expected a number after 'findById'` );
            }
            else {
                let output = Model.findById(+argument)
                if(output == null) {
                    View.printNotFound()
                } else {
                    View.printFind(output)
                }
            }
        }
        else if(command === "delete") { // --------------------------------------- Delete
            if(argument == undefined) {
                View.print( `Error: Expected a number after 'delete'` );
            }
            else {
                let output = Model.delete(+argument)
                if(output == null) {
                    View.printNotFound()
                } else {
                    View.printDel(output)
                }
            }
        }   
        else if(command === "complete") { // ----------------------------------- Complete
            if(argument == undefined) {
                View.print( `Error: Expected a number after 'complete'` );
            }
            else {
                let output = Model.complete(+argument)
                if(output == null) {
                    View.printNotFound()
                } else {
                    View.printArr( Model.list() );
                }
            }
        }
        else if(command === "uncomplete") { // ------------------------------- Uncomplete
            if(argument == undefined) {
                View.print( `Error: Expected a number after 'uncomplete'` );
            }
            else {
                let output = Model.complete(+argument, "uncomplete")
                if(output == null) {
                    View.printNotFound()
                } else {
                    View.printArr( Model.list() );
                }
            }
        }
        else {
            View.print( Model.help() ); // ----------------------------------------- Help
        }
    }
}

module.exports = Controller