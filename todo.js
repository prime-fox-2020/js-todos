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
    // case 'add':
    //     Controller.add(datas)
    //     break;

    case 'findById':
        Controller.findById(datas)
        break
}