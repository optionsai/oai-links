import knex from "knex";

import env from "./env";

const db = knex({
  client: "postgres",
  connection: `${env.DATABASE_URL}?ssl=true`
});

export default db;
