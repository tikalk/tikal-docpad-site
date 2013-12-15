var allTeam = require('./src/files/data/team.json');
var docpadConfig,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

docpadConfig = {
    reloadPaths:['./lib/'],
    regeneratePaths:['./lib/'],
    regenerateDelay: 300,
    templateData: {
        site: {
            url: "http://www.tikalk.com",
            oldUrls: ['www.website.com', 'website.herokuapp.com'],
            title: "Tikal",
            description: "When your website appears in search results in say Google, the text here will be shown underneath your website's title.",
            keywords: "place, your, website, keywoards, here, keep, them, related, to, the, content, of, your, website"
        },
        getPreparedTitle: function() {
            if (this.document.title) {
                return "" + this.document.title + " | " + this.site.title;
            } else {
                return this.site.title;
            }
        },
        getPreparedDescription: function() {
            return this.document.description || this.site.description;
        },
        getPreparedKeywords: function() {
            return this.site.keywords.concat(this.document.keywords || []).join(', ');
        },
        getGruntedStyles: function() {
            return "/styles/all.css";
        },
        getGruntedScripts: function() {
            return "/scripts/all.min.js";
        },
        externalLib: function(){
            return require('./lib/externalLib');
        },
        getTeamMember: function(pathName){
            return allTeam[pathName];
        },
        getFirstParagraph: function(content) {
            var paragraphs = content.split('</p>');
            return paragraphs[0] + '</p>';
        },
        getTagUrl: function (tag) {
            url = '/tags/' + tag;
            return url;
        },
        getEvenOdd: function(n) {
            if(n%2) {
                return 'odd';
            } else {
                return 'even';
            }
        },
        getFirstLastRowClass: function(row, len) {
            var val = '';
            if(row == 1) {
                val = 'views-row-first';
            } else if (row == len) {
                val = 'views-row-last';
            }
            return val;
        },
        getMonth: function( d) {
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                month, year, day;

            day = this.getDay(d);
            year = this.getYear(d);
            month = (d - year*10000 - day) / 100;

            return months[month-1];
        },
        getYear: function( d) {
            return (d - (d % 10000)) / 10000;
        },
        getDay: function (d) {
            return d % 100;
        }
    },
    events: {
        serverExtend: function(opts) {
            var docpad, latestConfig, newUrl, oldUrls, server;
            server = opts.server;
            docpad = this.docpad;
            latestConfig = docpad.getConfig();
            oldUrls = latestConfig.templateData.site.oldUrls || [];
            newUrl = latestConfig.templateData.site.url;
            return server.use(function(req, res, next) {
                var _ref;
                if (_ref = req.headers.host, __indexOf.call(oldUrls, _ref) >= 0) {
                    return res.redirect(newUrl + req.url, 301);
                } else {
                    return next();
                }
            });
        },
        writeAfter: function(opts, next) {
            var balUtil, command, docpad, rootPath, _;
            docpad = this.docpad;
            rootPath = docpad.config.rootPath;
            balUtil = require('bal-util');
            _ = require('underscore');
            command = ['grunt.cmd', 'default'];
            balUtil.spawn(command, {
                cwd: rootPath,
                output: true
            }, function() {
                var gruntConfig, src;
                src = [];
                gruntConfig = require('./grunt-config.json');
                _.each(gruntConfig, function(value, key) {
                    return src = src.concat(_.flatten(_.pluck(value, 'src')));
                });
                _.each(src, function(value) {
                    return balUtil.spawn(['rm', value], {
                        cwd: rootPath,
                        output: false
                    }, function() {});
                });
                balUtil.spawn(['find', '.', '-type', 'd', '-empty', '-exec', 'rmdir', '{}', '\;'], {
                    cwd: rootPath + '/out',
                    output: false
                }, function() {});
                return next();
            });
            return this;
        },
        docpadLoaded: function(opts, next){
            var command = ['grunt.cmd', 'generate-content'],
                balUtil = require('bal-util'),
                docpad = this.docpad,
                rootPath = docpad.config.rootPath;

            balUtil.spawn(command, {
                cwd: rootPath,
                output: true
            },next);
        }
    },
    collections: {
        pages: function() {
            return this.getCollection('html').findAllLive({
                isPage: true
            }, [
                {
                    filename: 1
                }
            ]);
        },
        posts: function() {
            return this.getCollection('html').findAllLive({
                relativeOutDirPath: 'posts'
            }, [
                {
                    created: -1
                }
            ]).sortCollection();
        }
    }
};

module.exports = docpadConfig;
