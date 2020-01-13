const mix = require('laravel-mix');

 mix.js('resources/js/app.js', 'public/js')
 .js('resources/js/bootstrap.js', 'public/js')
 .sass('resources/sass/app.scss', 'public/css')
 .copyDirectory('resources/img', 'public/img');

if (mix.inProduction()) {
    mix.version();
}
//  .copyDirectory('resources/img', 'public/img');
