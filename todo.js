const app = require('./controller');

const input = process.argv;
app.getInput(input[2], input[3], input.slice(4));
