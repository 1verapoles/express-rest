export { };
const { ConnectionOptions } = require('typeorm');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../../../.env')
});

const ConOpt: typeof ConnectionOptions = {
  type: "postgres",
  host: process.env['POSTGRES_DB'] || "localhost",
  port: process.env['POSTGRES_PORT'] || 5432,
  username: process.env['POSTGRES_USER'] || "postgres",
  password: process.env['POSTGRES_PASSWORD'] || "postgres",
  database: process.env['POSTGRES_DB'] || "node_project",
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