const Controller = require('./controllers/controller.js')
const command = process.argv[2]
const datas = process.argv[3]

switch(command) {
    case undefined:
        Controller.help()
        break
    case 'help':
        Controller.help()
        break
    case 'list':
        Controller.list()
        break
    case 'findById':
        Controller.findById(datas)
        break
    case 'delete':
        Controller.delete(datas)
        break
    case 'complete':
        Controller.complete(datas)
        break
    case 'uncomplete':
        Controller.uncomplete(datas)
        break;
    case 'add':
        Controller.add(datas)
        break
    case 'list:complete':
        Controller.listcomplete(datas)
        break
    case 'tag':
        Controller.tag(datas)
    // default:
    //     Controller.msg()
    //     break
}