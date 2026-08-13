import { BRANCH, CUSTOMER_VERSION, APPLICATION } from "../version.js";

export async function healthRoutes(app) {
  app.get("/health", async () => ({
    status: "healthy",
    application: APPLICATION,
    branch: BRANCH,
    customer_version: CUSTOMER_VERSION,
  }));
}
