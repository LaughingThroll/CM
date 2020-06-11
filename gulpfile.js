global.G = {
  // common gulp
  isDevelopment: !process.env.NODE_ENV || process.env.NODE_ENV == 'development',
  gulp: require('gulp'),
  gulpLoadPlugins: require('gulp-load-plugins')(),
  config: {
    src: require('./gulp-tasks/config/src.js')
  },
  gulpCached: require('gulp-cached'),
  gulpIf: require('gulp-if'),
  gulpFilter: require('gulp-filter'),
  gulpChanged: require('gulp-changed'),
  rename: require('gulp-rename'),
  browserSync: require('browser-sync'),
  del: require('del'),
  path: require('path'),
  // scss or sass or stylus
  sass: require('gulp-sass'),
  autoprefixer: require('gulp-autoprefixer'),
  cssmin: require('gulp-cssmin'),
  csscomb: require('gulp-csscomb'),
  sourcemaps: require('gulp-sourcemaps'),
  concat: require('gulp-concat'),
  // pug
  pug: require('gulp-pug'),
  gulpPugInheritance: require('gulp-pug-inheritance'),
  // webpack only js 
  webpack: require('webpack-stream'),
  terserPlugin: require('terser-webpack-plugin'),
  // images
  gulpResponsive: require('gulp-responsive'),
  gulpImagemin: require('gulp-imagemin'),
  imageminPngquant: require('imagemin-pngquant'),
  imageminMozjpeg: require('imagemin-mozjpeg')
}

G.config.src.forEach(task => {
  require(task)()
});


G.gulp.task('default', G.gulp.parallel('styleLibs', 'export:fonts', 'sass', 'watch', 'browser-sync', 'clean:images', 'pug', 'webpackJs', 'export:images'))

G.gulp.task('build', G.gulp.parallel('clean', 'export:fonts','styleLibs', 'sass', 'pug', 'webpackJs', 'export:images'))
