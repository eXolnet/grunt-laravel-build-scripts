'use strict';

module.exports = {
	less: {
		frontend: {
			src: ['public/assets/src/less/app/**/*.less'],
			files: {
				'public/assets/css/app.css': 'public/assets/src/less/app.less',
			},
		},
		backend: {
			src: ['public/assets/src/less/admin/**/*.less'],
			files: {
				'public/assets/css/admin.app.css': 'public/assets/src/less/admin.app.less',
			},
		},
	},

	js: {
		frontend: {
			src: [
				'public/assets/src/js/app/common/app.js',
				'public/assets/src/js/app/common/**/*.js',
				'public/assets/src/js/app/public/**/*.js',
			],
			dist: 'public/assets/js/app.js',
		},
		components_frontend: {
			src: [
				'public/assets/src/js/vendor/*.js',
			],
			dist : 'public/assets/js/components.js',
		},
		backend: {
			src: [
				'public/assets/src/js/app/common/app.js',
				'public/assets/src/js/app/common/**/*.js',
				'public/assets/src/js/app/admin/**/*.js',
			],
			dist: 'public/assets/js/admin.app.js',
		},
		components_backend: {
			src: [
				'public/assets/src/js/vendor/*.js',
			],
			dist : 'public/assets/js/admin.components.js',
		},
	},
};
