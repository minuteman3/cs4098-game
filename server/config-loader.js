var nconf = require('nconf');
var path = require('path');

nconf.overrides({ APP_DIR: path.resolve(__dirname, '..') + '/' });
nconf.argv();
try {
    nconf.file({ file: './config/server-config.json' });
} catch (e) {
    throw new Error("server-config.json file not found! Aborting!");
}
module.exports = nconf.get();
