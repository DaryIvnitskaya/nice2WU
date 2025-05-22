module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/style.css': 'stylesheets/style.scss'
				}
			}
		},
		 imagemin:{
		 	dynamic:{
		 		files: [{
		 			 expand: true,
          			 cwd: 'img/',
          			 src: ['**/*.{png,jpg,gif}'],
          			 dest: 'image/'
		 			}]
		 		}
		 	},
		 autoprefixer: {
		 	options: {
		 		browsers: ['> 0.1%']
		 	},
		 	dev: {
		 		src: 'css/style.css'
		 	}
		 },
		 watch: {
		 	options: {
		 		spawn: false,
		 		livereload: true
		 	},
		 	css: {
				files: 'stylesheets/**/*.scss',
		 		tasks: ['sass', 'autoprefixer'],
		 		options: {
					spawn: false,
		 			livereload: true
		 		}
		 	},
		 	html: {
		 		files: '*.html',
		 		options: {
		 			livereload: true
		 		}
		 	},
		 	js: {
		 		files: '*.js',
		 		options: {
		 			livereload: true
		 		}
		 	}
		 }
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['sass', 'concat', 'ftp_push']);
	grunt.registerTask('start', ['sass', 'concat']);
};