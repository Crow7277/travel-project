const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('styles', path.join(__dirname, './src/assets/styles/'))
            .set('@', path.join(__dirname, './src/'))
            .set('common', path.join(__dirname, './src/common/'));
    },
});
