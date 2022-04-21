const path = require('path');
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': '/mock',
                },
            },
        },
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('styles', path.join(__dirname, './src/assets/styles/'))
            .set('@', path.join(__dirname, './src/'))
            .set('common', path.join(__dirname, './src/common/'));
    },
});



// module.exports = {
//     lintOnSave: false,
//     transpileDependencies: true,
//     devServer: {
//         proxy: {
//             '/api': {
//                 target: 'http://localhost:8080',
//                 pathRewrite: {
//                     '^/api': '/mock',
//                 },
//             },
//         },
//     },
//     chainWebpack: config => {
//         config.resolve.alias
//             .set('styles', path.join(__dirname, './src/assets/styles/'))
//             .set('@', path.join(__dirname, './src/'))
//             .set('common', path.join(__dirname, './src/common/'));
//     },
// };
