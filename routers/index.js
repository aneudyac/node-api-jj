const express = require('express');

// Bk
const testApiRouter = require('./bk/testApi.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  // Bk
  router.use('/test-api', testApiRouter);
}

module.exports = routerApi;