module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    filenameHashing: false,
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
        host: "0.0.0.0",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
     
        // 配置多个代理
        // proxy: {
        //   "/api": {
        //     target: "http://t.yushu.im/v2/movie",
        //     ws: true,
        //     changeOrigin: true
        //   },
        // }
    }
}