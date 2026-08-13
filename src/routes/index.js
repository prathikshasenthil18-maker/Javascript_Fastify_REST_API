import { healthRoutes } from "./health.js";
import { productRoutes } from "./products.js";
import { orderRoutes } from "./orders.js";

export async function registerRoutes(app) {
  await app.register(healthRoutes, { prefix: "/api/v1" });
  await app.register(productRoutes, { prefix: "/api/v1" });
  await app.register(orderRoutes, { prefix: "/api/v1" });
}
