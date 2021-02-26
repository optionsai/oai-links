import knex from "knex";

import env from "./env";

const db = knex({
  client: "postgres",
  connection: {
    connectionString: `${env.DATABASE_URL}?ssl=true`,
    ssl: {
      rejectUnauthorized: false
    }
  }
});

export default db;
