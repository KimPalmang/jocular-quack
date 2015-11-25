module.exports = function(grunt){

  //require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Hint the JS files
    jshint: {
      options: {
        reporter: 'node_modules/jshint-stylish',
      },
      target: {
        files: {
          src: ['Gruntfile.js', 'src/**/*.js', '!src/assets/libs/*.js']
        }
      }
    },
    // watch for changes
    watch: {
      js: {
        files: 'src/**/*.js',
        tasks: ['jshint', 'uglify:dev'],
        options: {
          livereload: true
        },
      },
      sass: {
        files: 'src/**/*.scss',
        task: 'sass',
        options: {
          livereload: true
        },
      },
      html: {
        files: 'src/**/*.html',
        options: {
          livereload: true
        },
      }
    },
    // Clean the builds
    clean: {
      options: {
        force: true
      },
      dev: {
        src: ['dev']
      },
      prod: {
        src: ['prod']
      }
    },

    //copy all files
    copy: {
      prod: { //production
        expand: true,
        cwd: 'src/',
        src: ['**', '!**/sass/**', '!**/app/*.js'],
        dest: 'prod/'
      },
      dev: {
        expand: true,
        cwd: 'src/',
        src: ['**', '!**/sass/**', '!**/app/*.js'],
        dest: 'dev/'
      }
    },

    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
        mangle: false
      },
      prod: {
        files: {
          'prod/app/about/about.controller.js': 'prod/app/about/about.controller.js',
          'prod/app/about/about.factory.js': 'prod/app/about/about.factory.js',
          'prod/app/home/home.controller.js': 'prod/app/home/home.controller.js',
          'prod/app/shared/core/footer/footer.directive.js': 'prod/app/shared/core/footer/footer.directive.js',
          'prod/app/shared/core/footer/header.directive.js': 'prod/app/shared/core/header/header.directive.js',
          'prod/app/shared/core/navigation/navigation.directive.js': 'prod/app/shared/core/navigation/navigation.directive.js',
          'prod/app/app.js': ['src/app/app.module.js', 'src/app/app.routes.js'],

          //'prod/assets/libs/vendor.js': ['src/assets/libs/angular.js', 'src/assets/lib/angular-route.js'],
          'prod/assets/js/main.js': 'prod/assets/js/*.js'
        },
      },
      dev: {
        files: {
          'dev/app/app.js': ['src/app/app.module.js', 'src/app/app.routes.js'],
          //'dev/assets/libs/vendor.js': ['src/assets/libs/angular.js', 'src/assets/lib/angular-route.js'],
          'dev/assets/js/main.js': 'dev/assets/js/*.js'
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
      prod: {
        options: {
          style: 'compressed'
        },
        files: {
          'prod/assets/css/style.css': 'src/assets/sass/base.scss',
        }
      },
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'dev/assets/css/style.css': 'src/assets/sass/base.scss',
        }
      }
    },

    //connect to the Server
    connect: {
      prod: {
        options: {
          port: 8000,
          base: './prod',
          open: true
        }
      },
      dev: {
        options: {
          port: 8080,
          base: './dev',
          open: true
        }
      }
    }
  });

  //load dependencies

  grunt.loadNpmTasks('grunt-contrib-jshint');   // JS hinting
  grunt.loadNpmTasks('grunt-contrib-watch');    // Watch for changes
  grunt.loadNpmTasks('grunt-contrib-clean');    // Clean the builds

  grunt.loadNpmTasks('grunt-contrib-copy');     // Copy html files
  grunt.loadNpmTasks('grunt-contrib-uglify');   // Minify js
  grunt.loadNpmTasks('grunt-contrib-sass');     // Sass compile

  grunt.loadNpmTasks('grunt-contrib-connect');  // Server

  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-concat');


  //register tasks
  grunt.registerTask('dev', 'development build', ["copy:dev", "jshint", "uglify:dev", "sass:dev", "connect:dev", "watch"]);
  grunt.registerTask('prod', 'Grunt production task', ["copy:prod", "uglify:prod", "sass:prod"]);

  grunt.registerTask('clean-dev', 'cleanup for dev', ["clean:dev"]);
  grunt.registerTask('clean-prod', 'cleanup for prod', ["clean:prod"]);
  grunt.registerTask('clean-all', 'clean all builds', ["clean"]);

  grunt.registerTask('default', 'Default task', []);

};
