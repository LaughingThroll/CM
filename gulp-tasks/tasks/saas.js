

module.exports = () => {
  G.gulp.task('sass', function () {
    return G.gulp.src('app/style.scss')

      .pipe(G.gulpIf(G.isDevelopment, G.sourcemaps.init()))

      .pipe(G.sass({ outputStyle: G.isDevelopment ? 'expanded' : 'compressed' }))

      .pipe(G.rename({ suffix: '.min' }))

      .pipe(G.autoprefixer({ overrideBrowserslist: ['last 8 versions'] }))

      .pipe(G.gulpIf(G.isDevelopment, G.sourcemaps.write('./')))

      .pipe(G.csscomb())
      
      .pipe(G.gulp.dest('dist/css'))

      .pipe(G.browserSync.reload({ stream: true }))
  });
}
