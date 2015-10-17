module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			options: {
				livereload: 9000
			},
			gruntFileChange: {
				files: 'Gruntfile.js',
				tasks: ['sass', 'jade', 'concat', 'uglify']
			},

			css: {
				files: [
					'sass/*.scss',
					'sass/helpers/*.scss',
					'sass/plugins/*.scss',
					'sass/basics/*.scss',
					'sass/components/*.scss',
					'sass/parts/*.scss'
				],
				tasks: ['sass'],
			},

			html: {
				files: ['jade/*.jade', 'jade/**/*.jade', 'jade/**/**/*.jade', 'jade/**/**/**/*.jade'],
				tasks: 'jade',
			},

			scripts: {
				files: 'js/main.js',
			},
			
 
			concat: {
				files:[
					'js/vendor/jquery-1.11.2.min.js',
					'js/plugins/bootstrap.min.js',
					'js/plugins/slick.min.js',
					'js/plugins/jquery.classyloader.min.js'


				],
				tasks: 'concat',
			},  
		},

		sass: {
			src: {
				options: {
					style: 'compressed',
					noCache: true,
				},
				files: {
					'css/style.css': 'sass/style.scss'
				}
			}
		},


		jade: {
			src: {
				options: {
					pretty: true,
					expand: true,
				},
				files: {
					// 'index.html': ['jade/index.jade'],
					// 'pages-manual.html': ['jade/pages-manual.jade']
				}
			}
		},

		concat: {
			options: {
				separator: ';\n',
			},
			dist: {
				src: [
				'js/vendor/jquery-1.11.2.min.js',
				'js/plugins/bootstrap.min.js',
				'js/plugins/slick.min.js',
				'js/plugins/jquery.classyloader.min.js'

				],
				dest: 'js/plugins.js',
			},
		},

		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'js/plugins.min.js': ['js/plugins.js']
				}
			}
		},

	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// Default task(s).
	grunt.registerTask('default', ['watch']);

};