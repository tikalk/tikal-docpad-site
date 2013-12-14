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

    grunt.file.delete('./src/documents/tags');

    var tags = JSON.parse(grunt.file.read('./src/files/data/tags.json'));

    for (var t in tags) {
        var tagData = tags[t];
        tagData.layout = 'tag';
        tagData.title = t;
        var out = '---\n'+yaml.stringify(tagData)+'---';
        grunt.file.write('./src/documents/tags/'+ t + '/index.html', out);
    }
    grunt.file.write('./src/documents/tags/index.html', tags);
}