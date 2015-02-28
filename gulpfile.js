var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('clean', function() {
  var del = require('del');
  // Delete all files in _site
  del('_site/*');
});
