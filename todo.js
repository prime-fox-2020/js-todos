let controller = require('./controller')
let argv = process.argv.slice(2)

switch(argv[0]){
    case 'help' || null || undefined:
        controller.showHelp()
        break
    case 'list':
        controller.showList()
        break
    default:
        controller.showHelp()
        break
}