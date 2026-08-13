export function httpError(statusCode, message, details) {
  var err = new Error(message || "error");
  err.statusCode = statusCode || 500;
  if (details) err.details = details;
  return err;
}
