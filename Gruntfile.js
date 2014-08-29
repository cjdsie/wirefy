module.exports = function(grunt) {

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	scsslint: {
	    allFiles: [
	        'sass/*.scss', 'sass/base/*.scss', 'sass/helpers/*.scss', 'sass/framework/*.scss', 'sass/modules/*.scss', 'sass/theme/*.scss', 'sass/vendor/*.scss'
	    ],
	    options: {
	        bundleExec: false,
	        config: '.scss-lint.yml',
	        reporterOutput: 'scss-lint-report.xml',
	        colorizeOutput: true,
	        maxBuffer: 'Infinite'
	    }
	},
    sass: {                                 // Task
        dist: {                             // Target
            files: {                        // Dictionary of files
                'css/wirefy.css': 'sass/wirefy.scss'     // 'destination': 'source'
            }
        },
        dev: {                              // Another target
            options: {
	            style: 'compressed',                      // Dictionary of render options
                includePaths: [
                    'sass/','base/', 'helpers/', 'framework/', 'modules/', 'theme/', 'vendor/'
                ]
            }

        }
    },
    uglify: {
	    build: {
	        src: 'js/plugins.js',
	        dest: 'js/plugins.min.js'
	    }
	},
	imagemin: {
		dynamic: {
		    files: [{
		      expand: true,
		      cwd: 'img/',
		      src: ['**/*.{png,jpg,gif}'],
		      dest: 'img/'
		    }]
		  }
	},
	cssmin: {
	  minify: {
	    expand: true,
	    cwd: 'css/',
	    src: ['wirefy.css', '!wirefy.min.css'],
	    dest: 'css/',
	    ext: '.min.css'
	  }
	},
	concat: {
		options: {
		      separator: ';'
		    },
	  js: {
	    src: [
	      'js/plugins.min.js',
	      'js/wirefy.js',
	      'js/helper.js',
	    ],
	    dest: 'js/wirefy.min.js'
	  }
	}
});

grunt.loadNpmTasks('grunt-scss-lint');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.registerTask('default', ['sass', 'uglify', 'imagemin', 'cssmin', 'concat']);

};