const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');

mix.sass('src/editor.scss', 'dist')
  .blocks('src/editor.js', 'dist');

mix.setPublicPath('.')
  .version();
