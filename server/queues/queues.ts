import Queue from "bull";
import path from "path";

import env from "../env";

const redis = env.REDIS_TLS_URL;

const removeJob = job => job.remove();

export const visit = new Queue("visit", { redis });

visit.clean(5000, "completed");

visit.process(8, path.resolve(__dirname, "visit.js"));

visit.on("completed", removeJob);
