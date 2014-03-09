var test = require('tape');
var fs = require('fs');

fs.readdirSync('./tests').forEach(function(file) {
	if(file.match('.js') ){
		require('./tests/' + file);
	}
});