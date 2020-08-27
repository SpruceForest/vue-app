module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://data.miaov.com/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                },
                secure: false,
                // headers: {
                //     Referer: 'https://localhost:8081/'
                // }
            }
        }
    },
    // configureWebpack: config => {
    //     //调试JS
    //     config.devtool = "source-map";
    // },
    // css: {
    //     //查看CSS属于哪个css文件
    //     sourceMap: true
    // },
    // publicPath: process.env.NODE_ENV = 'https://jkxt.tech/public5/'
    // chainWebpack: (config) => {
    //     config
    //         .plugin('html')
    //         .tap((args) => {
    //             args[0].title = '驾驶员考试系统';
    //             return args;
    //         });
    // }
};