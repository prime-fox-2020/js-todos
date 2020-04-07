const Controller = require('./controller.js')

const command = process.argv[2]
const input = process.argv[3]

switch (command) {
    case 'help':
        Controller.help()
        break
    case 'list':
        Controller.list()
        break
    case 'add':
        Controller.add(input)
        break
    case 'findByID':
        Controller.findByID(input)
        break
    case 'delete':
        Controller.delete(input)
        break
    case 'complete':
        Controller.complete(input)
        break
    case 'uncomplete':
        Controller.uncomplete(input)
        break                                 
    default:
        Controller.help()
        break
}