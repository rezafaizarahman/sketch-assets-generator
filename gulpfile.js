const {
  src,
  dest,
  parallel
} = require('gulp');
const sketch = require('gulp-sketch');
const rename = require('gulp-rename');

function exportSketch() {
  return src('src/sketch/*.sketch')
    .pipe(sketch({
      export: 'slices',
      formats: 'png',
      scales: [1.0, 4.0]
    }))
    .pipe(dest('dist/assets'))
}

exports.exportSketch = exportSketch;