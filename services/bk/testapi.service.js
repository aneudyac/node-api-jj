const MSSQLServer = require('../../lib/mssqlserver');

class TestApiServices {
  constructor() {
    this.dbInstance = new MSSQLServer();
  }

  async get() {
    try {
      const db = await this.dbInstance.connect();
      const response = await db
                          .request()
                          .execute('[bk].[spBuscarTestApi]');
      const list = response.recordset;
      return Promise.resolve(list);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getOne({ ID }) {
    try {
      const db = await this.dbInstance.connect();
      const response = await db
                          .request()
                          .input('ID', this.dbInstance.dataTypes.Int, ID)
                          .execute('[bk].[spBuscarTestApi]');
      const object = response.recordset[0] || {};
      return Promise.resolve(object);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async create(testApi) {
    try {
      const db = await this.dbInstance.connect();
      const response = await db
                          .request()
                          .input('ID', this.dbInstance.dataTypes.Int, testApi.ID)
                          .input('Codigo', this.dbInstance.dataTypes.VarChar(50), testApi.Codigo)
                          .input('Nombre', this.dbInstance.dataTypes.VarChar(255), testApi.Nombre)
                          .input('Edad', this.dbInstance.dataTypes.Int, testApi.Edad)
                          .execute('[bk].[spIUTestApi]');
      const newObject = response.recordset[0] || {};
      return Promise.resolve(newObject);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  
  async update(testApi) {
    try {
      const db = await this.dbInstance.connect();
      const response = await db
        .request()
        .input('ID', this.dbInstance.dataTypes.Int, testApi.ID)
        .input('Codigo', this.dbInstance.dataTypes.VarChar(50), testApi.Codigo)
        .input('Nombre', this.dbInstance.dataTypes.VarChar(255), testApi.Nombre)
        .input('Edad', this.dbInstance.dataTypes.Int, testApi.Edad)
        .execute('[bk].[spIUTestApi]');
      const newObject = response.recordset[0];
      return Promise.resolve(newObject);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async delete(ID) {
    try {
      const db = await this.dbInstance.connect();
      const response = await db
                          .request()
                          .input('ID', this.dbInstance.dataTypes.Int, ID)
                          .execute('[bk].[spBorrarTestApi]');
      const deletedCatalogType = response.recordset[0];
      return Promise.resolve(deletedCatalogType);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = TestApiServices;
