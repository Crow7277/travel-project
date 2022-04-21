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
        chainWebpack:(config)=>{
            config.resolve.alias
                .set('@',resolve('./src'))
                .set('components',resolve('./src/components'))
                .set('views',resolve('./src/views'))
                .set('assets',resolve('./src/assets'))
            //set第一个参数：设置的别名，第二个参数：设置的路径
    
        }
    }
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
