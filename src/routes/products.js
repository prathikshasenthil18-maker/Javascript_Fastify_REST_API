import { listProducts, getProduct } from "../domain/products.js";
import { httpError } from "../lib/errors.js";

export async function productRoutes(app) {
  app.get("/products", async (req) => {
    const q = req.query ?? {};
    const items = listProducts({
      q: q.q,
      activeOnly: String(q.activeOnly ?? "") === "true",
    });
    return { items, total: items.length };
  });

  app.get("/products/:sku", async (req) => {
    const product = getProduct(req.params.sku);
    if (!product) throw httpError(404, "product_not_found");
    return product;
  });
}
