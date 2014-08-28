module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
     
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'app/css/app.css': 'app/scss/app.scss'
        }         
      }
    },


    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: ['app/scss/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['watch']);

}