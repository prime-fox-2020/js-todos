const Controller = require('./controller');

const command = process.argv[2];
switch(command) {
    case undefined: case 'help': Controller.to_do_commands(); break;
    default: ;
}