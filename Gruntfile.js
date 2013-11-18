var teamGenerator = require('./lib/generators/teamMembers');

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    var gruntConfig = require('./grunt-config.json');
    grunt.initConfig(gruntConfig);
    grunt.registerTask('default', Object.keys(gruntConfig));

    grunt.registerTask('generate-team-members', 'Generate team members from data file', function(){
        teamGenerator(grunt);
    });
};