import env from "./server/env";

import pg from 'pg';

pg.defaults.ssl = {
      rejectUnauthorized: false,
}

module.exports = {
  production: {
    client: "postgresql",
    connection: `${env.DATABASE_URL}?ssl=true`,
    ssl: {
      rejectUnauthorized: false
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "server/migrations"
    }
  }
};
