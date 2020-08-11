
let Controller = require('./controller.js')
var arr = process.argv.slice(2)  
// console.log(arr)

switch(arr[0]){
    case 'help' :
        Controller.help();
        break;
    case 'list' :
        Controller.list();
        break;
    case 'add':
        Controller.add(arr.slice(1).join(' '));
        break;
    case 'findById':
        Controller.find(Number(arr[1]));
        break;
    case 'delete':
        Controller.delete(Number(arr[1]));
        break;
    case 'complete':
        Controller.complete(Number(arr[1]));
        break;
    case 'uncomplete':
        Controller.complete(Number(arr[1]));
        break;
    default:
        Controller.help();
        break;
    }






