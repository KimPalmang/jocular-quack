module.exports = function(grunt){
  var _ = require('lodash');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      output: 'build'
    },
    copy: {
      libs: {
        src: 'src/assets/libs/**',
        dest: '<%= dirs.output %> /libs/'
      },
      js: {
        src: 'src/assets/js/**',
        dest: '<%= dirs.output %> /js/'
      }
      // main: {
      //   files: [
      //     {expand: true, src: 'src/index.html', dest: 'build/index.html', filter: 'isFile'},
      //     {expand: true, src: 'src/app/**', dest: 'build/app/', filter: 'isFile'},
      //     {expand: true, src: 'src/assets/**', dest: 'build/assets/', filter: 'isFile'}
      //   ]
      // }
      // html: {
      //   files: {
      //     src: ['src/*.html'],
      //     dest: 'build/',
      //     expand: true,
      //     cwd: 'src/',
      //   }
      // }
    }
      // files: {
      //   expand: true,
      //   dest: 'build',
      //   cwd: 'src/',
      //   src: '**'
      //}
    //}
    // copy: {
    //   cwd: 'src',  // set working folder / root to copy
    //   src: 'src/**/*',           // copy all files and subfolders
    //   dest: 'build/files',    // destination folder
    //   expand: true           // required when using cwd
    //   // app: {
    //   //   files: [
    //   //     {expand: true, flatten: true, src: ['app/**/*.js'], dest: 'build/app/', filter: 'isFile'},
    //   //     {expand: true, flatten: true, src: ['app/**/*.html'], dest: 'build/app/', filter: 'isFile'},
    //   //     {expand: true, src: ['src/index.html'], dest: 'build/', filter: 'isFile'},
    //   //   ]
    //   // },
    //   // assets: {
    //   //   files: [
    //   //     {expand: true, flatten: true, src: ['assets/lib/angular/angular.js'], dest: 'build/assets/lib'},
    //   //     {expand: true, flatten: true, src: ['assets/lib/angular-route.js'], dest: 'build/assets/lib'},
    //   //     {expand: true, flatten: true, src: ['assets/js/*.js'], dest: 'build/assets/js'},
    //   //     {expand: true, flatten: true, src: ['assets/img/*'], dest: 'build/assets/img'},
    //   //     {expand: true, flatten: true, src: ['assets/sass/**/*.sass'], dest: 'build/assets/css', filter: 'isFile'},
    //   //   ]
    //   // }
    // },
    // options: {
    //   /**/
    // }
  });

  //load dependencies
  // grunt.loadNpmTasks('grunt-html-build');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  //register tasks
  //grunt.registerTask('copy', 'Copy all files task', []);
  grunt.registerTask('default', 'Grunt default task', ["copy:libs"]);

};
