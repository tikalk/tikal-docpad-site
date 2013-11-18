/**
 * Created with JetBrains WebStorm.
 * User: assaf
 * Date: 11/18/13
 * Time: 8:08 AM
 * To change this template use File | Settings | File Templates.
 */

var ejs = require('ejs'),
    yaml = require('yamljs');

module.exports = function(grunt){
    grunt.log.debug('generating team members');
    //var tmpl = grunt.file.read('./lib/templates/team-member.ejs');

    var team = JSON.parse(grunt.file.read('./src/files/data/team.json'));
    for(var m in team){
        var member = team[m];
        member.title = member.name;
        member.memberPath = m;
        var out = '---\n'+yaml.stringify(member)+'---';
        //var out = ejs.render(tmpl, {title: member.name, memberPath: member});
        grunt.log.debug(out);
        grunt.file.write('./src/documents/'+m+'/index.html', out);

    }
}