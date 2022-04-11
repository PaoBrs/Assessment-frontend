const BASE_URL = "https://fakestoreapi.com/products";

export async function getProducts() {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  return data;
}

export async function getOneProduct() {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  return data;
}
