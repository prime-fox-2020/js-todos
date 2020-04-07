'use strict';

let control = require('./control');

let command = process.argv.slice(2);
control.run(command);
