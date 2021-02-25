import knex from "knex";

import env from "./env";

const db = knex({
  client: "postgres",
  connection: env.DATABASE_URL
});

export default db;
