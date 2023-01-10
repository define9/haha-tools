module.exports = {
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    hot: true,
    proxy: {
      '/proxy': {
        target: 'http://127.0.0.1',
        ws: false,
        secure: false,
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite:{
          '^/proxy': '/'
        },
        onProxyReq:function(proxyReq,req,res){
          console.log("原路径："+req.originalUrl,"代理路径："+ req.url)
        }
      }
    }
  }
}