/**
 * Created with JetBrains WebStorm.
 * User: gail
 * Date: 12/10/13
 * To change this template use File | Settings | File Templates.
 */

var ejs = require('ejs'),
    yaml = require('yamljs');

module.exports = function(grunt){
    grunt.log.debug('generating post tags list');

    grunt.file.delete('./src/documents')

    var tags = JSON.parse(grunt.file.read('./src/files/data/tags.json'));

//    var doc = grunt.file.read('./src/documents/posts/1970-01-01-direct-userlink-creation-via-sql-works.html');
//    for(var m in team){
//        var member = team[m];
//        member.title = member.name;
//        member.memberPath = m;
//        member.layout = 'profile';
//        var out = '---\n'+yaml.stringify(member)+'---';
//        grunt.log.debug(out);
//        grunt.file.write('./src/documents/'+m+'/index.html', out);
//
//    }
    var out = '---\ntags: ["geo"]\n---';
    grunt.file.write('./src/documents/tags/index.html', out);

}