const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/weRecycle', {
          target: 'http://172.30.1.2:8080',
          changeOrigin: true,
          secure: false
      })
  )

  app.use(
    createProxyMiddleware('/camera',{
      target: 'http://172.30.1.60:5000',
      changeOrigin: true,
      secure: false
    })
  )
};