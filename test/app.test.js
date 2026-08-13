import test from "node:test";
import assert from "node:assert/strict";
import { buildApp } from "../src/app.js";

test("GET /api/v1/health", async () => {
  const app = await buildApp();
  const res = await app.inject({ method: "GET", url: "/api/v1/health" });
  assert.equal(res.statusCode, 200);
  const body = res.json();
  assert.equal(body.status, "healthy");
  await app.close();
});

test("GET /api/v1/products", async () => {
  const app = await buildApp();
  const res = await app.inject({ method: "GET", url: "/api/v1/products" });
  assert.equal(res.statusCode, 200);
  assert.ok(res.json().total >= 1);
  await app.close();
});

test("POST /api/v1/orders", async () => {
  const app = await buildApp();
  const res = await app.inject({
    method: "POST",
    url: "/api/v1/orders",
    payload: { lines: [{ sku: "SK-100", qty: 1 }] },
  });
  assert.equal(res.statusCode, 200);
  assert.equal(res.json().total, 49);
  await app.close();
});
