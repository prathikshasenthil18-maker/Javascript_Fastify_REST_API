export function applyDiscount(price, pct) {
  price = Number(price);
  pct = Number(pct != null ? pct : 0);
  if (!(price >= 0) || pct < 0 || pct > 100) throw new Error("pricing_invalid");
  return Math.round(price * (1 - pct / 100) * 100) / 100;
}

export function taxInclusive(net, rate) {
  return Math.round(Number(net) * (1 + Number(rate != null ? rate : 0)) * 100) / 100;
}
