module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 4000,
          base: 'build',
          hostname: '*',
          keepalive: true
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
          cwd: 'src',
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
          src: [ 'assests/stylesheets/main.sass' ],
          dest: 'build',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
}
