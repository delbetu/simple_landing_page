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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
}
