/**
 * Created with JetBrains WebStorm.
 * User: gail
 * Date: 12/10/13
 * To change this template use File | Settings | File Templates.
 */

var ejs = require('ejs'),
    yaml = require('yamljs'),
    yamlFront = require('yaml-front-matter');;

module.exports = function(grunt){
    grunt.log.debug('generating post tags list');

//  scan files in posts directories for tag information
//  organize info in js object which is written to tags.json
    var postsTags = {};

    grunt.file.recurse('./src/documents/posts', callback);

    grunt.file.write('./src/files/data/tags.json', JSON.stringify(postsTags));

    function callback (abspath, rootdir, subdir, filename) {
        results = yamlFront.loadFront('./' + abspath);
        var tags = results.tags;
        if (tags && tags.length) {
            processTags(tags);
        }
    }

    function processTags(tags) {
        for(var t in tags) {
            var tag = tags[t].toLowerCase();
            if(postsTags[tag]) {
                postsTags[tag].posts += 1;
                if(postsTags[tag].variants.indexOf(tags[t]) == -1) {
                    postsTags[tag].variants.push(tags[t]);
                }
            } else {
                postsTags[tag] = {
                    posts: 1,
                    variants: [tags[t]]
                }
            }
        }
    }

//  delete tags folder and generate individual tags pages
    grunt.file.delete('./src/documents/tags');

//    var tags = JSON.parse(grunt.file.read('./src/files/data/tags.json'));

    var tags = postsTags;

    for (var t in tags) {
        var tagData = tags[t];
        tagData.layout = 'tag';
        tagData.title = t;
        var out = '---\n'+yaml.stringify(tagData)+'---';
        grunt.file.write('./src/documents/tags/'+ t + '/index.html', out);
    }
    grunt.file.write('./src/documents/tags/index.html', tags);
}