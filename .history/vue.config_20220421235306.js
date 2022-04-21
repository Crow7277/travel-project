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
        config.resolve.alias.{
            '@': resolve('./src')
        
            // .set('@', resolve('./src'))
            // .set('styles', resolve('./src/assets/styles'));
        //set第一个参数：设置的别名，第二个参数：设置的路径
    },
    // config.resolve.alias
    //     .set('styles', path.join(__dirname, './src/assets/styles/'))
    //     .set('@', path.join(__dirname, './src/'))
    //     .set('common', path.join(__dirname, './src/common/'));
    // },
};
