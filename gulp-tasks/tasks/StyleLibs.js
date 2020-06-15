module.exports = () => {
  G.gulp.task('styleLibs', function () {
    return G.gulp.src([
      'node_modules/normalize.css/normalize.css',
      'node_modules/animate.css/animate.css'
  
    ])
      .pipe(G.concat('libs.min.css'))
      .pipe(G.cssmin())
      .pipe(G.gulp.dest('dist/css'))
  });
}