var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile sass files
gulp.task('compile-styles', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
});

// Watch changes at sass files
gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', gulp.series('compile-styles'));
});
