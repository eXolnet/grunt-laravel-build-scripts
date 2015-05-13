'use strict';

var _ = require('lodash');
var moment = require('moment');
var cfg = require('./cfg');

module.exports = function(grunt, config) {
	grunt.log.writeln('%s - Loading external tasks...', moment().format());

	require('time-grunt')(grunt);
	require('jit-grunt')(grunt, {
		pluginsRoot: config.pluginsRoot || 'node_modules',
	});

	grunt.log.writeln('%s - done!', moment().format());

	grunt.initConfig(_.merge.apply({}, _.values(cfg)));

	function alias(name, tasks) {
		grunt.registerTask(name, tasks.split(' '));
	}

	// Build tasks
	alias('css:debug', 'less:debug_frontend less:debug_backend');
	alias('css:release', 'less:release_frontend less:release_backend');

	alias('js:debug', 'uglify:debug_app uglify:debug_components jshint:all');
	alias('js:release', 'ngAnnotate:release uglify:release');

	// Testing tasks
	alias('test', 'jshint:all');

	alias('build:debug', 'symlink:build css:debug js:debug');
	alias('build:release', 'symlink:build css:release js:release clean:build_symlink');

	// Development tasks
	alias('dev', 'build:debug watch');

	// Continuous integration
	alias('ci', 'build:release test');

	alias('default', 'dev');
};