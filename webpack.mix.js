const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');

mix.sass('src/editor.scss', 'dist');
mix.blocks('src/editor.js', 'dist');
