var nconf = require('nconf');

nconf.argv();
try {
    nconf.file({ file: './config.json' });
} catch (e) {
    throw new Error("config.json file not found! Aborting!");
}

module.exports = nconf.get();
