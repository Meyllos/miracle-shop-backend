import envConfig from './envirnoment';

const config = {
  development: {
    username: envConfig.db_username,
    password: envConfig.db_password,
    database: envConfig.DATABASE_DEV,
    url: envConfig.database,
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: envConfig.db_username_test,
    password: envConfig.db_password_test,
    database: 'miracle_shop_test',
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  }
};

module.exports = config;
