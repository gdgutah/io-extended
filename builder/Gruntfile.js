module.exports = function(grunt){

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec:{
      generator: {
        cmd: 'node generator.js'
      }
    },
    watch: {
      scripts: {
        files: ['*.js', '**/*.html', '**/*.jade', '!node_modules/**/*.*'],
        tasks: ['exec:generator'],
        options: {
          interrupt: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('dev',['watch:scripts']);
  grunt.registerTask('default', 'exec');
};