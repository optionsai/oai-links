import env from "./server/env";

module.exports = {
  production: {
    client: "postgresql",
    connection: `${env.DATABASE_URL}?ssl=true`,
    migrations: {
      tableName: "knex_migrations",
      directory: "server/migrations"
    }
  }
};
