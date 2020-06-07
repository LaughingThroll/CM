module.exports = () => {
  // Incremental approach 
  G.gulp.task('html', function () {
    
    return G.gulp.src('app/**/*.html')

      // // files which changed 
      // .pipe(G.gulpChanged('dist', { extension: '.html' }))
      
      // // if file watching mean woks cach
      // .pipe(G.gulpIf(global.isWatching, G.gulpCached('pug')))
      
      // // Rebuild pug file  that have extended or included
      // .pipe(G.gulpPugInheritance({ basedir: 'app/pug', skip: 'node_modules' }))
      // // Filter all files with _
      // .pipe(G.gulpFilter(function (file) {
      //   return !/\/_/.test(file.path) && !/^_/.test(file.relative);
      // }))
      
      // // Standard PUG
      // .pipe(G.pug({
      //   pretty: G.isDevelopment ? true : false 
      // }))
     
      .pipe(G.gulp.dest('dist'))

      .pipe(G.browserSync.reload({ stream: true }))
  })
}