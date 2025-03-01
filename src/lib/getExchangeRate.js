export async function getExchangeRate(from, to) {
  const res = await fetch(
    `https://v6.exchangerate-api.com/v6/a03b212026cbbaa158c5e311/latest/${from}`
  );
  const data = await res.json();
  return data.conversion_rates[to];
}
