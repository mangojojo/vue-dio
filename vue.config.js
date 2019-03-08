const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
    lintOnSave: false,
    publicPath: './',
    assetsDir: 'assets', // 静态文件夹
    chainWebpack: config => {
        config.resolve.alias.set('_c', resolve('src/components'))
    },
    // 生产环境打包时不生成.map文件
    productionSourceMap: false,
    devServer: {
        // proxy: 'http://localhost:4000'
    }
}
