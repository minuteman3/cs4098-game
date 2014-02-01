var nconf = require('nconf');

nconf.file({ file: './config.json' });
try {
    nconf.file({ file: './config.json' });
} catch (e) {
}

console.log(nconf.get());
module.exports = null;
