module.exports = function(grunt){

  // var _ = require('lodash');
  //var jshintStylish = require('jshint-stylish');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.html', '!index.html'],
          dest: 'dist/app/views/',
          flatten: true,
          filter: 'isFile'
        },{
          expand: true,
          cwd: 'src/',
          src: ['!**/*.html', 'index.html'],
          dest: 'dist/',
          flatten: true,
          filter: 'isFile'
        }]
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.html', '!index.html'],
          dest: 'dev/app/views/',
          flatten: true,
          filter: 'isFile'
        },{
          expand: true,
          cwd: 'src/',
          src: ['!**/*.html', 'index.html'],
          dest: 'dev/',
          flatten: true,
          filter: 'isFile'
        }]
      }

    },
    jshint: {
      options: {
        reporter: 'node_modules/jshint-stylish',
      },
      target:{
        files: {
          src:
          ['Gruntfile.js', 'src/**/*.js', '!src/assets/libs/*.js']
        }
      }
    },

    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
        mangle: false
      },
      dist: {
        files: {
          'dist/js/main.js': ['src/assets/js/*.js'],
          //angular
          'dist/app/app.js': ['src/app/app.module.js', 'src/app/app.routes.js'],
          'dist/app/js/controllers.js': 'src/app/**/*.controller.js',
          'dist/app/js/factories.js': 'src/app/**/*.factory.js',
          'dist/app/js/directives.js': 'src/app/**/*.directive.js',

          'dist/libs/vendor.js': 'src/assets/libs/*.js'
        },
      },
      dev: {
        files: {
          'dev/js/main.js': 'src/assets/js/*.js',
          //angular
          'dev/app/app.js': ['src/app/app.module.js', 'src/app/app.routes.js'],
          'dev/app/js/controllers.js': 'src/app/**/*.controller.js',
          'dev/app/js/factories.js': 'src/app/**/*.factory.js',
          'dev/app/js/directives.js': 'src/app/**/*.directive.js',

          'dev/libs/vendor.js': 'src/assets/libs/*.js'
        },
        options: {
          beautify: {
            width: 80,
            beautify: true
          }
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/css/style.css': 'src/assets/sass/base.scss',
        }
      },
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'dev/css/style.css': 'src/assets/sass/base.scss',
        }
      }
    },

    watch: {
      javascript: {
        files: 'src/**/*.js',
        tasks: ['jshint', 'uglify']
      },
      sass: {
        files: 'src/**/*.scss',
        task: 'sass'
      }
    },

    clean: {
      dev: {
        src: ['dev']
      },
      dist: {
        src: ['dist']
      }
    }
  });

  //load dependencies

  grunt.loadNpmTasks('grunt-contrib-jshint');   // JS hinting
  grunt.loadNpmTasks('grunt-contrib-uglify');   // Minify js
  grunt.loadNpmTasks('grunt-contrib-sass');     // Sass
  grunt.loadNpmTasks('grunt-contrib-watch');    // Watch for changes
  grunt.loadNpmTasks('grunt-contrib-clean');    // Clean the builds
  grunt.loadNpmTasks('grunt-contrib-connect');  // Server
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');     // Copy html files

  //register tasks
  grunt.registerTask('dev', 'development build', ["copy:dev", "jshint", "uglify:dev", "sass:dev"]);
  grunt.registerTask('dist', 'Grunt distrubution task', ["uglify:dist", "sass:dist", "copy:dist"]);

  grunt.registerTask('clean-dev', 'cleanup for dev', ["clean:dev"]);
  grunt.registerTask('clean-dist', 'cleanup for dist', ["clean:dist"]);
  grunt.registerTask('clean-all', 'clean all builds', ["clean"]);

  grunt.registerTask('default', 'Default task', []);

};
