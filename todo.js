const Controller = require('./controller.js')

const app = process.argv.slice(2);
const command = app[0].split(':')[0],
      detail  = app[0].split(':')[1],
      task    = app[1],
      tags    = app.slice(2);
if(command === 'help' || !command)  Controller.help();
if(command === 'add')               Controller.add(task);
if(command === 'findById')          Controller.findById(task);
if(command === 'delete')            Controller.delete(task);
if(command === 'complete')          Controller.complete(task);
if(command === 'uncomplete')        Controller.uncomplete(task);
if(command === 'tags')              Controller.tags(task, tags)
if(command === 'filter')            Controller.filter(detail);
if(command === 'list')
{
  if(!detail) Controller.list();
  if(detail)  Controller.list(detail, task);
}