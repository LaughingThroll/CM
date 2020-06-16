module.exports = () => {
  G.gulp.task('export:images', function () {

    const pngFilter = G.gulpFilter('**/*.png', { restore: true })
    const jpgFilter = G.gulpFilter('**/*.{jpg, jpeg}', { restore: true })
    const contentFilter = G.gulpFilter('app/static/images/content/**/*.*', { restore: true })
    const faviconFilter = G.gulpFilter('app/static/images/favicon/**/*.png', { restore: true })
    return G.gulp.src('app/static/images/**/*.*')
      .pipe(contentFilter)
      // TODO optimization i want doing cycle and naming images
      .pipe(G.gulpIf(!G.isDevelopment, G.gulpResponsive({
        '**/*': [
          {
            width: 100 * 1 + '%'
          },
          {
            width: 100 * 1 + '%',
            rename: { suffix: '@1x' }
          },
          {
            width: 100 * 2 + '%',
            rename: { suffix: '@2x' }
          },
          {
            width: 100 * 3 + '%',
            rename: { suffix: '@3x' }
          }
        ]
      },
        {
          withoutEnlargement: false,
          progressive: true,
          withMetadata: false,
          quality: 60,
          compressionLevel: 8,
        })))


      .pipe(pngFilter)
      .pipe(G.gulpIf(!G.isDevelopment, G.gulpImagemin([
        G.imageminPngquant({
          quality: [0.5, 0.6], speed: 5
        })
      ])))

      .pipe(pngFilter.restore)
      .pipe(jpgFilter)
      .pipe(G.gulpIf(!G.isDevelopment, G.gulpImagemin([
        G.imageminMozjpeg({
          quality: 60, progressive: true, tune: "ms-ssim"
        })
      ])))
      .pipe(jpgFilter.restore)
      .pipe(G.gulp.dest('dist/images'))
      .pipe(contentFilter.restore)
      .pipe(faviconFilter)
      .pipe(G.gulpIf(!G.isDevelopment, G.gulpResponsive({
        '**/favicon.png': [
          {
            width: 100 + '%',
            rename: 'favicon.png'
          },
          {
            width: 16,
            rename: 'favicon-16x16.png'
          },
          {
            width: 32,
            rename: 'favicon-32x32.png'
          },
          {
            width: 57,
            rename: 'apple-icon-57x57.png'
          },
          {
            width: 60,
            rename: 'apple-icon-60x60.png'
          },
          {
            width: 72,
            rename: 'apple-icon-72x72.png'
          },
          {
            width: 76,
            rename: 'apple-icon-76x76.png'
          },
          {
            width: 114,
            rename: 'apple-icon-114x114.png'
          },
          {
            width: 120,
            rename: 'apple-icon-120x120.png'
          },
          {
            width: 144,
            rename: 'apple-icon-144x144.png'
          },
          {
            width: 144,
            rename: 'ms-icon-144x144.png'
          },
          {
            width: 152,
            rename: 'apple-icon-152x152.png'
          },
          {
            width: 180,
            rename: 'apple-icon-180x180.png'
          },
          {
            width: 192,
            rename: 'apple-icon-192x192.png'
          },
        ]
      },
        {
          withoutEnlargement: false,
          progressive: true,
          withMetadata: false,
          compressionLevel: 8,
        })))
      .pipe(faviconFilter.restore)  
      .pipe(G.gulp.dest('dist/images/favicon'))

  })
}    
