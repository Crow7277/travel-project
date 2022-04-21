// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//     lintOnSave: false,
//     transpileDependencies: true,
// });

const path = require('path');

module.exports = {
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
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    styles: path.join(__dirname, './src/assets/styles/'),
                }, // 别名配置
            },
        });
        // config.resolve.alias
        //     .set('styles', path.join(__dirname, './src/assets/styles/'))
        //     .set('@', path.join(__dirname, './src/'))
        //     .set('common', path.join(__dirname, './src/common/'));
    },
};
