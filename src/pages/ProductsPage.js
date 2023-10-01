const ProductsPage = async () => {
  const res = await fetch("http://localhost:3000/products", {
    method: "GET",
  });

  const products = await res.json();
  console.log(products);

  return `
  <div>
    ${products
      .map(
        (product) => `<div class="product-item">
      <h2>${product.name}</h2>
      <div>${product.price}</div>
      <div>${product.desc}</div>
    </div>`
      )
      .join("")}
  
  </div>
  `;
};

export default ProductsPage;
