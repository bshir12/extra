const CracoAlias = require('craco-alias');

module.exports = {
plugins: [
    {
    plugin: CracoAlias,
    options: {
        source: 'options',
        baseUrl: './',
        aliases: {
        '@': './src',
        '@assets': './src/assets',
        '@components': './src/components',
        '@pages': './src/pages',
        }
    }
    }
],
style: {
    postOptions: {
    plugins: [require('tailwindcss/nesting'), require('tailwindcss'), require('autoprefixer')]
    }
}}