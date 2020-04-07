const Controller = require('./controller.js')

const app = process.argv.slice(2);
const command = app[0],
      task    = app[1];
if(command === 'help' || !command)  Controller.help();
if(command === 'list')              Controller.list();
if(command === 'add')               Controller.add(task);
if(command === 'findById')          Controller.findById(task);
if(command === 'delete')            Controller.delete(task);
if(command === 'complete')          Controller.complete(task);
if(command === 'uncomplete')        Controller.uncomplete(task);