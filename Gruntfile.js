module.exports = function(grunt) {

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
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
                    'sass/','components/', 'helpers/'
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
	}
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('default', ['sass', 'uglify', 'imagemin']);

};