module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 4000,
          base: 'build',
          hostname: '*'
        }
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true,
          data: {}
        },
        files: [{
          cwd: 'src/views',
          expand: true,
          src: [ '**/*.jade' ],
          dest: 'build',
          ext: '.html'
        }]
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: [ 'assets/stylesheets/main.sass' ],
          dest: 'build',
          ext: '.css'
        }]
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: [ 'src/assets/stylesheets/**/*.sass', 'src/assets/stylesheets/**/*.scss' ],
        tasks: [ 'sass' ]
      },
      jade: {
        files: 'src/views/**/*.jade',
        tasks: [ 'jade' ]
      }
    },

    clean: {
      build: {
        src: [ 'build' ]
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: 'assets/images/**/*',
        dest: 'build'
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask(
    'build',
    [ 'clean', 'jade', 'sass', 'copy' ]
  );

  grunt.registerTask(
    'default',
    [ 'build', 'connect', 'watch' ]
  );
}
