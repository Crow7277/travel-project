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
    ————————————————
    版权声明：本文为CSDN博主「迷雾总会解」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
    原文链接：https://blog.csdn.net/qq_44766883/article/details/106108615
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
