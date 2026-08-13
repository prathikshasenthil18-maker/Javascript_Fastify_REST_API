import { listProducts, getProduct } from "../domain/products.js";
import { httpError } from "../lib/errors.js";

export async function productRoutes(app) {
  app.get("/products", async function (req) {
    var q = req.query || {};
    var items = listProducts({
      q: q.q,
      activeOnly: String(q.activeOnly || "") === "true",
    });
    return { items: items, total: items.length };
  });

  app.get("/products/:sku", async function (req) {
    var product = getProduct(req.params.sku);
    if (!product) throw httpError(404, "product_not_found");
    return product;
  });
}
