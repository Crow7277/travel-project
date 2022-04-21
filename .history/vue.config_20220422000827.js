// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//     lintOnSave: false,
//     transpileDependencies: true,
// });

const path = require('path');

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

    chainWebpack:config=>{
        config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options=>{
        //修改它的选项
            return options;
            })
        },
    //实例2：添加一个新的Loader
    chainWebpack:config=>{
        //GraphQL Loader
        config.module
        .rule('graphql')
        .test(/\.graphql$/)
        .use('graphql-tag/loader')
        .loader('graphql-tag/loader')
        .end()
        //你还可以再添加一个loader
        .use('other-loader')
        .loader('other-loader')
        .end()
    
        }
    }
// };
