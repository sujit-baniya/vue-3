let mix = require('laravel-mix');

mix
    .setPublicPath('public')
    .webpackConfig({
        optimization: {
            providedExports: false,
            sideEffects: false,
            usedExports: false
        }
    })
    .js('src/js/app.js', 'public/js')
    .sass('src/sass/vendor.scss', 'public/css')
    .sass('src/sass/app.scss', 'public/css')
    .vue({ version: 3 })
    .extract();