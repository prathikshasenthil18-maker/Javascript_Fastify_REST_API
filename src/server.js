import { buildApp } from "./app.js";
import { loadConfig } from "./lib/config.js";

async function main() {
  const config = loadConfig(process.env);
  const app = await buildApp({ logger: true });
  try {
    await app.listen({ port: config.port, host: config.host });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

main();
