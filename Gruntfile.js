var teamGenerator = require('./lib/generators/teamMembers');
var tagGenerator  = require('./lib/generators/postTags');

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    var gruntConfig = require('./grunt-config.json');
    grunt.initConfig(gruntConfig);
    grunt.registerTask('default', Object.keys(gruntConfig));

    grunt.registerTask('generate-content', 'Generate team members from data file, tag pages from post files', function(){
        teamGenerator(grunt);
        tagGenerator(grunt);
    });
};