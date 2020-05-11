module.exports = () => {
    G.gulp.task('export:fonts', function () {
        return G.gulp.src('app/static/fonts/**/*.*')
            .pipe(G.gulp.dest('dist/fonts'))
    
    });
}
