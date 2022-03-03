require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV !== 'production',
  nodeEnv: process.env.NODE_ENV,

  port: process.env.PORT || 3000,
  cors: process.env.CORS,
//   salt: process.env.SALT,
//   jwtSecret: process.env.JWT_SECRET,
//   jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
//   jwtActivationSecret: process.env.JWT_ACTIVATION_SECRET,

  siteUrl: process.env.SITE_URL,

//   sendGridKey: process.env.SEND_GRID_KEY,

  dbUser: process.env.DB_USER,
  dbPwd: process.env.DB_PWD,
  dbName: process.env.DB_NAME,
  server: process.env.SERVER,
}

module.exports = { config }