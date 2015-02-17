'use strict';

var fs = require('fs');
var glob = require('glob');
// var through = require('through2');
var replacestream = require('replacestream');

glob('**/*.md', function (er, files) {
  files.forEach(function(file) {
    fs.createReadStream(file)
      .pipe(replacestream('.md)', '.html)'))
      .pipe(fs.createWriteStream(file.replace('.md', '.html')));
  });
});
