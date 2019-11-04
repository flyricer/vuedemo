const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const  ExtractTextPlugin  =  require('extract-text-webpack-plugin');
// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',// 区分打包环境与开发环境
    outputDir: 'dist',// 生产环境构建文件的目录
    assetsDir: 'assets',// 放置生成的静态资源的目录
    filenameHashing: false,// 静态资源文件名中是否包含hash 
    lintOnSave: true,// 生产环境下禁用 eslint-loader 检查
    productionSourceMap: false, // 生产环境的 source map
    // transpileDependencies: [],
    // pages: {
    //     //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    //     index: {
    //       //除了 entry 之外都是可选的
    //       entry: 'src/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
    //       template: 'public/index.html', // 模板来源
    //       filename: 'index.html', // 在 dist/index.html 的输出
    //       title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
    //       chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    //     }
    // },
    // 如果我们创建的库中引用了一个广泛使用的库，发布自己的库时又不想让webpack打包，可以用此来排除，比如
    // externals: {
    //     "lodash": {
    //           commonjs: "lodash",//如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
    //           commonjs2: "lodash",//同上
    //           amd: "lodash",//如果我们的库使用require.js等加载,等价于 define(["lodash"], factory);
    //           root: "_"//如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ = (window._) or (_);
    //     }
    // },
    // chainWebpack: (config) => {
    //     if (process.env.NODE_ENV === 'production') {
    //         if (process.env.npm_config_report) {
    //             config
    //                 .plugin('webpack-bundle-analyzer')
    //                 .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    //                 .end();
    //             config.plugins.delete('prefetch')
    //         }
    //     }
    // },// 添加 plugin 选项，比如可视化打包文件
    // chainWebpack: (config) => {
    //     config.entry.app = ['babel-polyfill', './src/main.js'];
    // },
    // configureWebpack: {
    //     mode: 'production',
    //     // externals: {//不用打包到vendor.js中的文件
    //     //     // 'vue': 'Vue',
    //     //     // 'vue-router': 'VueRouter',
    //     //     // 'vuex': 'Vuex',
    //     //     // 'axios': 'axios',
    //     //     element: 'element-ui'
    //     // },
    //     optimization: {
    //         // minimize: true,
    //         minimizer: [
    //             new TerserPlugin({
    //               terserOptions: {
    //                 compress: {
    //                     warnings: false,
    //                     drop_console: true,
    //                     drop_debugger: true,
    //                     pure_funcs: ['console.log']
    //                 },
    //               },
    //             }),
    //         ],          
    //         splitChunks: {
    //             chunks: "async",
    //             minSize: 30000, // 模块的最小体积
    //             minChunks: 1, // 模块的最小被引用次数
    //             maxAsyncRequests: 5, // 按需加载的最大并行请求数
    //             maxInitialRequests: 3, // 一个入口最大并行请求数
    //             automaticNameDelimiter: '~', // 文件名的连接符
    //             // name: true,  //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔
    //             cacheGroups: { // 缓存组
    //                 vendors: {
    //                     test: /[\\/]node_modules[\\/]/,
    //                     // chunks: 'initial',
    //                     name: 'vendor',  // 打包后的文件名，任意命名    
    //                     // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
    //                     priority: 10  
    //                 },
    //                 default: {
    //                     minChunks: 2,//一般为非第三方公共模块
    //                     priority: -20,
    //                     reuseExistingChunk: true
    //                 }
    //             }
    //         },
    //         runtimeChunk: {
    //             name: 'manifest'
    //         }
    //     },
    //     plugins: [
    //         new CompressionPlugin({
    //             algorithm: 'gzip',//算法
    //             test: /\.(js|css)$/,
    //             threshold: 10240,//只处理比这个值大的资源。按字节计算
    //             minRatio: 0.8//只有压缩率比这个值小的资源才会被处理
    //         })
    //     ]
    // },
    //如果想要引入babel-polyfill可以这样写
    // configureWebpack: (config) => {
    //   config.entry = ["babel-polyfill", "./src/main.js"]
    // },
    // css相关配置
    // css: {
    //     extract: true,//是否使用css分离插件 ExtractTextPlugin
    //     sourceMap: false,//开启 CSS source maps?
    //     //css预设器配置项,即向所有 Sass/Less 样式传入共享的全局变量或统一设置
    //     loaderOptions: {},
    //     modules: false// 启用 CSS modules for all css / pre-processor files.
    // },
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
    },
    // 第三方插件配置
    // pluginOptions: {
    //     // ...
    // }
}