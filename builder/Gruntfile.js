module.exports = function(grunt){

  // Project configuration.
  grunt.initConfig({
    jade: {
      main: {
        options: {
          data: function() {
            return require('./data')();
          }
        },
        files: {
          '../index.html': 'index.jade'
        }
      }
    },
    watch: {
      scripts: {
        files: ['*.js', '**/*.html', '**/*.jade', '!node_modules/**/*.*'],
        tasks: ['jade'],
        options: {
          interrupt: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('dev',['watch:scripts']);
  grunt.registerTask('default', 'jade:main');
};