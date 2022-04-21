// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//     lintOnSave: false,
//     transpileDependencies: true,
// });

const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}

module.exports = {
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
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '@': resolve('src'),
    //             styles: resolve('src/assets/styles'),
    //         },
    //     },
    // },
    chainWebpack: config => {
        config.resolve.alias
            .set('styles', path.join(__dirname, './src/assets/styles/'))
            .set('@', path.join(__dirname, './src/'))
            .set('common', path.join(__dirname, './src/common/'));
    },
};
