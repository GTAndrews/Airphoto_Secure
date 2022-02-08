const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
      '/api',
      createProxyMiddleware({
          target: 'https://madgic.trentu.ca/proxy/proxy.ashx',
          changeOrigin: true,
      })
  )
};