export function isSku(value) {
  return /^[A-Z0-9][A-Z0-9\-]{1,31}$/.test(String(value ?? ""));
}

export function requireFields(obj, fields) {
  const o = obj ?? {};
  return (fields ?? []).filter((f) => o[f] == null || o[f] === "");
}
