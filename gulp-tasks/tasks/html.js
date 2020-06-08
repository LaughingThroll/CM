module.exports = () => {
  G.gulp.task('html', function () {
    
    return G.gulp.src('app/**/*.html')

      .pipe(G.gulp.dest('dist'))

      .pipe(G.browserSync.reload({ stream: true }))
  })
}