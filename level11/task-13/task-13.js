const product = {
  name: "Smartphone",
  price: 799,
  category: "Electronics",
  inStock: true
};

const { name: productName, price, category, inStock } = product;

function formatProduct({ name: productName, price, category, inStock }) {
  return `${productName} - ${category} - $${price} - ${inStock ? "In stock" : "Out of stock"}`;
}

console.log(productName);
console.log(price);
console.log(category);
console.log(inStock);
console.log(formatProduct(product));
