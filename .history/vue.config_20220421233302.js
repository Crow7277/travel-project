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
                '@c': path.resolve(__dirname, './src/components'),
                '@p': path.resolve(__dirname, './src/pages'),
                '@v': path.resolve(__dirname, './src/views'),
              } // 别名配置
            }
          })
      ————————————————
      版权声明：本文为CSDN博主「杰~JIE」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
      原文链接：https://blog.csdn.net/weixin_44869002/article/details/105552911
        config.resolve.alias
            .set('styles', path.join(__dirname, './src/assets/styles/'))
            .set('@', path.join(__dirname, './src/'))
            .set('common', path.join(__dirname, './src/common/'));
    },
};
