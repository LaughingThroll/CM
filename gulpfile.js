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
  gulpRev: require('gulp-rev'),
  gulpRevRewrite: require('gulp-rev-rewrite'),
  // scss or sass or stylus
  sass: require('gulp-sass'),
  autoprefixer: require('gulp-autoprefixer'),
  cssmin: require('gulp-cssmin'),
  csscomb: require('gulp-csscomb'),
  sourcemaps: require('gulp-sourcemaps'),
  concat: require('gulp-concat'),
  // pug
  // pug: require('gulp-pug'),
  // gulpPugInheritance: require('gulp-pug-inheritance'),
  // webpack only js 
  webpack: require('webpack-stream'),
  terserPlugin: require('terser-webpack-plugin'),
  // images
  // gulpResponsive: require('gulp-responsive'),
  // gulpImagemin: require('gulp-imagemin'),
  // imageminPngquant: require('imagemin-pngquant'),
  // imageminMozjpeg: require('imagemin-mozjpeg')
}

G.config.src.forEach(task => {
  require(task)()
});

// 'clean:images' 'export:fonts', , 'export:images' 'pug',
G.gulp.task('default', G.gulp.parallel('styleLibs',  'sass', 'watch', 'browser-sync', 'html', 'webpackJs'))
// 'export:fonts', , 'export:images'  'pug',
G.gulp.task('build', G.gulp.parallel('clean', 'styleLibs', 'sass', 'html', 'webpackJs'))