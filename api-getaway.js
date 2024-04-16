const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

app.use('/avto', createProxyMiddleware({
  target: 'http://avto-service1:8080',
  changeOrigin: true
}));

app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
});
