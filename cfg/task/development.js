'use strict';

var _ = require('lodash');
var fs = require('fs');
var grunt = require('grunt');
var config = require('../config.js');

module.exports = {
	clean: {
		build_symlink: ['public/assets/src'],
	},

	jshint: {
		options: {
			reporter: require('jshint-stylish')
		},
		all: {
			src: config.js.frontend.src
		}
	},

	symlink: {
		build: {
			src: 'assets',
			dest: 'public/assets/src',
		},
	},

	watch: {
		less_frontend: {
			tasks: ['less:debug_frontend'],
			files: config.less.frontend.src,
		},
		less_backend: {
			tasks: ['less:debug_backend'],
			files: config.less.backend.src,
		},
		jshint: {
			tasks: ['jshint:all'],
			files: [
				config.js.frontend.src,
				config.js.backend.src,
			],
		},
		uglify_app: {
			tasks: ['uglify:debug_app'],
			files: [
				config.js.frontend.src,
				config.js.backend.src,
			],
		},
		uglify_components: {
			tasks: ['uglify:debug_components'],
			files: [
				config.js.components_frontend.src,
				config.js.components_backend.src
			]
		},
	},
};