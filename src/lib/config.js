export function loadConfig(env = process.env) {
  return {
    port: Number(env.PORT ?? 3000),
    host: env.HOST ?? "0.0.0.0",
    customerVersion: Number(env.CUSTOMER_VERSION ?? 0),
  };
}
