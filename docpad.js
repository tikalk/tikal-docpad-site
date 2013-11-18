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
            command = ['grunt', 'default'];
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
            var command = ['grunt', 'generate-team-members'],
                balUtil = require('bal-util'),
                docpad = this.docpad,
                rootPath = docpad.config.rootPath;

            balUtil.spawn(command, {
                cwd: rootPath,
                output: true
            },next);
        }
    }
};

module.exports = docpadConfig;
