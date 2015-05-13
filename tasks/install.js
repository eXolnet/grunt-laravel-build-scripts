'use strict';

module.exports = function(grunt){
	grunt.registerTask('install', function(){
		var async = require('async');
		var exec = require('child_process').exec;
		var done = this.async();

		var runCmd = function(cmd, options, callback) {
			process.stdout.write('running "' + cmd + '"...\n');
			var cmd = exec(cmd, options);
			cmd.stdout.on('data', function (data) {
				grunt.log.writeln(data);
			});
			cmd.stderr.on('data', function (data) {
				grunt.log.errorlns(data);
			});
			cmd.on('exit', function (code) {
				if (code !== 0) throw new Error(cmd + ' failed');
				grunt.log.writeln('done :D\n');
				callback();
			});
		};

		async.series({
			npm: function(callback){
				runCmd('npm install', {}, callback);
			},
			bower: function(callback){
				runCmd('bower install', {}, callback);
			},
			composer: function(callback) {
				runCmd('php composer.phar install', {}, callback);
			},
		},
		function(err, results) {
			if (err) done(false);
			done();
		});
	});
};
