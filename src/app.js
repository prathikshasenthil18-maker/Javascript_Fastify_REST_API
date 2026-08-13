import Fastify from "fastify";
import { registerRoutes } from "./routes/index.js";
import { CUSTOMER_VERSION, BRANCH, APPLICATION } from "./version.js";

export async function buildApp(opts) {
  opts = opts || {};
  var app = Fastify(Object.assign({ logger: false }, opts));
  app.get("/", async function () {
    return {
      application: APPLICATION,
      branch: BRANCH,
      customer_version: CUSTOMER_VERSION,
      api: "/api/v1",
    };
  });
  await registerRoutes(app);
  return app;
}
