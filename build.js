'use strict';

var fs = require('fs');
var glob = require('glob');
var through = require('through2');
var replacestream = require('replacestream');
var marked = require('marked');

glob('**/*.md', function (er, files) {

  files.forEach(function(file) {

    var content = [];

    fs.createReadStream(file)
      .pipe(replacestream('.md)', '.html)'))
      .pipe(through(function(chunk, enc, callback) {

        this.push(chunk);

        callback();
      }))
      .on('data', function(data) {

        content.push(data);
      })
      .on('end', function () {

        var md = marked(content.toString());

        fs.createReadStream('./template.html')
          .pipe(replacestream('{{md}}', md))
          .pipe(fs.createWriteStream(file.replace('.md', '.html')));
      });
  });
});
