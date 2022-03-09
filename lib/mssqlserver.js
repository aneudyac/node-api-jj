const sql = require('mssql');
const { config } = require('../config');

class MSSQLServer {
  constructor() {
    const { 
      dbUser, 
      dbPwd, 
      dbName, 
      server, 
      dbUserTest, 
      dbPwdTest, 
      dbNameTest, 
      serverTest, 
      nodeEnv } = config;

    const configProd = {  
      user: encodeURIComponent(dbUser),
      password: dbPwd,
      database: encodeURIComponent(dbName),
      server: encodeURIComponent(server),
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
      parseJSON: true
    };
    
    const configTest = {
      user: encodeURIComponent(dbUserTest),
      password: dbPwdTest,
      database: encodeURIComponent(dbNameTest),
      server: encodeURIComponent(serverTest),
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
      parseJSON: true
    };

    this.config = nodeEnv === 'test' ? configTest : configProd;

    this.dataTypes = {
      VarChar: sql.VarChar,
      VarCharMAX: sql.VarChar(sql.MAX),
      MAX: sql.MAX,
      NVarChar: sql.NVarChar,
      Int: sql.Int,
      Bit: sql.Bit,
      DateTime: sql.DateTime,
      VarBinary: sql.VarBinary,
      TVP: sql.TVP
    }
  }

  async connect() {
    try {
      if (!MSSQLServer.connection) {
        MSSQLServer.connection = await sql.connect(this.config);

        return Promise.resolve(MSSQLServer.connection);
      }

      return Promise.resolve(MSSQLServer.connection);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = MSSQLServer;
