import { buildApp } from "./app.js";
import { loadConfig } from "./lib/config.js";

async function main() {
  var config = loadConfig(process.env);
  var app = await buildApp({ logger: true });
  try {
    // Fastify v3 listen signature (port, host)
    await app.listen(config.port, config.host);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

main();
