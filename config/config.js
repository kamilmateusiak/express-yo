var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'FinControl'
    },
    port: process.env.PORT || 3000,
    db: process.env.DATABASE_URL || 'mysql://root@localhost:3306/inzkry'
  },

  test: {
    root: rootPath,
    app: {
      name: 'FinControl'
    },
    port: process.env.PORT || 3000,
    db: process.env.DATABASE_URL_TEST || 'mysql://root@localhost:3306/inzkry'
  },

  production: {
    root: rootPath,
    app: {
      name: 'FinControl'
    },
    port: process.env.PORT || 3000,
    db: process.env.DATABASE_URL || 'mysql://root@localhost:3306/inzkry'
  }
};

module.exports = config[env];
