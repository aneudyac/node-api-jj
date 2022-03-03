const express = require('express');
// const passport = require('passport')
const cors = require('cors');
const routerApi = require('./routers');

const app = new express();

const { config } = require('./config/index');

// const { logErrors, wrapError, errorHandler } = require('./utils/middleware/error.handler');
// const notFoundHandler = require('./utils/middleware/notFound.handler');

app.use(express.json());
app.use(cors())
// require('./utils/auth');
app.use(passport.initialize());

app.get('/', function (req, res) {
  res.send('Javi y Julio - WebAPI');
});

routerApi(app);

app.use(notFoundHandler);

// Errors Middlewares
// app.use(logErrors);
// app.use(wrapError);
// app.use(errorHandler);


const server = app.listen(config.port, function () {
  console.log(`Listening on port ${config.port}`);
});


module.exports = {
  app, server
}