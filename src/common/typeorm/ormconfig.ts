export { };
const { ConnectionOptions } = require('typeorm');
const path = require('path');
const { POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_HOST } = require('../config');

const ConOpt: typeof ConnectionOptions = {
  type: "postgres",
  host: POSTGRES_HOST || "host.docker.internal",
  port: POSTGRES_PORT || 5432,
  username: POSTGRES_USER || "postgres",
  password: POSTGRES_PASSWORD || "postgres",
  database: POSTGRES_DB || "postgres",
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 3000,
  entities: [
    path.join(__dirname, '../entities/*.ts')
  ],
  migrations: [
    path.join(__dirname, '../migration/*.ts')
  ],
  cli: {
    "entitiesDir": path.join(__dirname, '../entities'),
    "migrationsDir": path.join(__dirname, '../migration'),
  },
};

module.exports = ConOpt;