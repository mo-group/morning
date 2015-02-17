'use strict';

var fs = require('fs');
var glob = require('glob');
var through = require('through2');
var replacestream = require('replacestream');
var marked = require('marked');
var highlight = require('highlight.js');


var options = {
  gfm: true,
  tables: true,
  breaks: true,
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }
};

marked.setOptions(options);


var indexContent = [];

fs.createReadStream('README.md')
.pipe(replacestream('.md)', '.html)'))
.pipe(through(function(chunk, enc, callback) {

  this.push(chunk);

  callback();
}))
.on('data', function(data) {

  indexContent.push(data);
})
.on('end', function () {

  var md = marked(indexContent.toString());

  fs.createReadStream('./template.html')
    .pipe(replacestream('{{md}}', md))
    .pipe(replacestream('{{path}}', '.'))
    .pipe(fs.createWriteStream('index.html'));
});

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
          .pipe(replacestream('{{path}}', '..'))
          .pipe(fs.createWriteStream(file.replace('.md', '.html')));
      });
  });
});
