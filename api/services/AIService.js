var Promise = require('promise');
module.exports = {
	search: function (text) {
		var apiai = require('apiai');
		var app = apiai(sails.config.apiai.token);
		var request = app.textRequest(text);
 		return new Promise(function (resolve, reject) {
 			request.on('response', function(response) {
			    resolve(response);
			});
			 
			request.on('error', function(error) {
			    reject(error);
			});

			request.end();
 		});
	}
};