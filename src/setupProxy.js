const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
      '/api',
      createProxyMiddleware({
          target: 'http://madgic.trentu.ca/proxy.ashx',
          changeOrigin: true,
      })
  )
};