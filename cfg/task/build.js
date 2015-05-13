'use strict';

var config = require('../config.js');

module.exports = {
	clean: {
		build_symlink: ['public/assets/src'],
		js_release: ['public/assets/src/js/generated'],
	},

	less: {
		debug_frontend: {
			options: {
				sourceMap: true,
				sourceMapFilename: 'public/assets/css/app.map',
				sourceMapURL: 'app.map',
				sourceMapBasepath: 'public/assets',
				sourceMapRootpath: '../',
			},
			files: config.less.frontend.files,
		},
		debug_backend: {
			options: {
				sourceMap: true,
				sourceMapFilename: 'public/assets/css/admin.app.map',
				sourceMapURL: 'admin.app.map',
				sourceMapBasepath: 'public/assets',
				sourceMapRootpath: '../',
			},
			files: config.less.backend.files,
		},
		release_frontend: {
			options: {
				cleancss: true,
			},
			files: config.less.frontend.files,
		},
		release_backend: {
			options: {
				cleancss: true,
			},
			files: config.less.backend.files,
		},
	},

	ngAnnotate: {
		release: {
			files: {
				'public/assets/src/js/generated/app.js': config.js.frontend.src,
				'public/assets/src/js/generated/admin.app.js': config.js.backend.src
			},
		},
	},

	uglify: {
		debug_app: {
			files: {
				'public/assets/js/app.js': config.js.frontend.src,
				'public/assets/js/admin.app.js': config.js.backend.src,
			},
			options: {
				mangle: false,
				compress: false,
				preserveComments: 'all',
				beautify: true,
				sourceMap: true,
			},
		},
		debug_components: {
			files: {
				'public/assets/js/components.js': config.js.components_frontend.src,
				'public/assets/js/admin.components.js': config.js.components_backend.src,
			},
			options: {
				mangle: false,
				compress: false,
				preserveComments: 'all',
				beautify: true,
				sourceMap: true,
			},
		},
		release: {
			files: {
				'public/assets/js/app.js': 'public/assets/src/js/generated/app.js',
				'public/assets/js/admin.app.js': 'public/assets/src/js/generated/admin.app.js',
				'public/assets/js/components.js': config.js.components_frontend.src,
				'public/assets/js/admin.components.js': config.js.components_backend.src
			},
			options: {
				report: 'min',
				preserveComments: 'some',
			},
		},
	},
};