module.exports = function(grunt){

  var _ = require('lodash');
  var jshintStylish = require('jshint-stylish');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        reporter: jshintStylish
      },
      build: {
        files: [{'Gruntfile.js', 'src/**/*.js'}]
      }
    },
    // uglify: {
    //   options: {
    //     banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
    //   },
    //   build: {
    //
    //   }
    // }
  });

  //load dependencies
  //grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-copy');

  //register tasks
  //grunt.registerTask('copy', 'Copy all files task', []);
  grunt.registerTask('default', 'Grunt default task', ["jshint"]);

};
