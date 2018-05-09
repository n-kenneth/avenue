const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');

gulp.task('sass', () => {
  return gulp.src('./src/scss/**/*.scss')
  .pipe(plumber({ errorHandler: function(err) {
            notify.onError({
                title: "Gulp error in " + err.plugin,
                message:  err.toString()
            })(err);
        }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('./src/css/'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], () => {

  browserSync.init({
    server: {
      baseDir: './src'
    },
  });

  gulp.watch( './src/scss/**/*.scss', ['sass'] );
  gulp.watch('./src/**/*.html', browserSync.reload);
  gulp.watch('./src/**/*.js', browserSync.reload);

});

gulp.task('default', ['serve']);