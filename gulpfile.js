var gulp = require('gulp');

gulp.task('default', function() {
  gulp.src(['donate/**'])
  .pipe(gulp.dest('_site/donate'));
});

gulp.task('clean', function() {
  var del = require('del');
  // Delete all files in _site
  del('_site/*');
});
