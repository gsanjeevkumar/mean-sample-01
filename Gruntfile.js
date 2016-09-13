module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    growl : {
    	myMessage : {
    		message : "New Data Point Fetched",
    		title : "BlueMon Working"
    	}
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['growl']);

  grunt.loadNpmTasks('grunt-growl');
  grunt.registerTask('default', 'growl:myMessage');

};