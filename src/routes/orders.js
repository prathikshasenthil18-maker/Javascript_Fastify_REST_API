import { createOrder } from "../domain/orders.js";
import { httpError } from "../lib/errors.js";

export async function orderRoutes(app) {
  app.post("/orders", async (req) => {
    try {
      return createOrder(req.body ?? {});
    } catch (err) {
      throw httpError(400, err.message ?? "order_invalid");
    }
  });
}
