export function isSku(value) {
  return /^[A-Z0-9][A-Z0-9\-]{1,31}$/.test(String(value || ""));
}

export function requireFields(obj, fields) {
  obj = obj || {};
  fields = fields || [];
  var missing = [];
  for (var i = 0; i < fields.length; i += 1) {
    if (obj[fields[i]] == null || obj[fields[i]] === "") missing.push(fields[i]);
  }
  return missing;
}
