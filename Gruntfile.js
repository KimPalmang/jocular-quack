module.exports = function(grunt){
  var _ = require('lodash');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      output: 'build'
    },
    copy: {
      prod: {
        files: [
          {
            expand: true,
            cwd: 'src/assets/libs/',
            src: '**',
            dest: '<%= dirs.output %> /libs/'
          },
          {
            expand: true,
            cwd: 'src/assets/js/',
            src: '**',
            dest: '<%= dirs.output %> /js/'
          },
          {
            expand: true,
            cwd: 'src/',
            src: '**.html',
            dest: '<%= dirs.output %>'
          }
        ]
      }
    }
  });

  //load dependencies
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  //register tasks
  //grunt.registerTask('copy', 'Copy all files task', []);
  grunt.registerTask('default', 'Grunt default task', ["copy"]);

};
