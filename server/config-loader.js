var nconf = require('nconf');
var path = require('path');

nconf.argv();
try {
    nconf.file({ file: './config.json' });
} catch (e) {
    throw new Error("config.json file not found! Aborting!");
}
console.log(nconf.get());
module.exports = nconf.get();
