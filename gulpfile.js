var { gulp, src, dest, watch, series, parallel } = require("gulp");
var sketch = require("gulp-sketch");
var svgo = require("gulp-svgo");

var buildSVGs = function(done) {
  return src(".src/sketch/*.sketch")
    .pipe(
      sketch({
        export: "slices",
        formats: "svg",
        scales: "1.0",
        saveForWeb: true
      })
    )
    .pipe(svgo())
    .pipe(dest(".dist/assets"));
};

exports.svg = series(buildSVGs);
