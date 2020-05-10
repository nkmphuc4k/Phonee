export function searchProduct(products, searchKey, limit) {
  const trimmedSearchKey = searchKey.trim();

  return products
    .filter((product) => trimmedSearchKey && new RegExp(trimmedSearchKey, 'i').test(product.name))
    .slice(0, limit);
}
