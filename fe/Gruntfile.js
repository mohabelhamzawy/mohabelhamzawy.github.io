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
					'js/plugins/slick.min.js'


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
					// 'pages-manual.html': ['jade/pages-manual.jade'],
					// 'all-news.html': ['jade/all-news.jade'],
					// 'articles.html': ['jade/articles.jade'],
					// 'articles-single.html':['jade/articles-single.jade'],
					// 'championships.html': ['jade/championships.jade'],
					// 'caricature.html': ['jade/caricature.jade'],
					// 'caricature-single.html': ['jade/caricature-single.jade'],
					// 'club.html': ['jade/club.jade'],
					// 'infographic.html': ['jade/infographic.jade'],
					// 'infographic-single.html':['jade/infographic-single.jade'],
					// 'interviews.html': ['jade/interviews.jade'],
					// 'interview-single.html':['jade/interview-single.jade'],
					// 'korabia-now.html': ['jade/korabia-now.jade'],
					// 'live-event.html': ['jade/live-event.jade'],
					// 'latest-news.html': ['jade/latest-news.jade'],
					// 'new-components.html': ['jade/new-components.jade'],
					// 'news.html': ['jade/news.jade'],
					// 'news-single.html':['jade/news-single.jade'],
					// 'other-sports.html': ['jade/other-sports.jade'],
					// 'player.html': ['jade/player.jade'],
					// 'poll.html': ['jade/poll.jade'],
					// 'poll-single.html':['jade/poll-single.jade'],
					// 'private-files.html':['jade/private-files.jade'],
					// 'questions.html': ['jade/questions.jade'],
					// 'questions-single.html': ['jade/questions-single.jade'],
					// 'search.html': ['jade/search.jade'],
					// '_single.html':['jade/_single.jade'],
					// '_story-single.html': ['jade/_story-single.jade'],
					// 'writer.html': ['jade/writer.jade'],
					// 'file-single.html': ['jade/file-single.jade'],
					// '_korabia-now-old.html': ['jade/_korabia-now-old.jade'],
					// 'jade/UI liberary/news.html':['jade/UI liberary/jade/news.jade'],
					// 'jade/UI liberary/new-components.html':['jade/UI liberary/jade/new-components.jade']


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
				'js/plugins/slick.min.js'

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