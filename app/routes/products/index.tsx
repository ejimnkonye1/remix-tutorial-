// app/routes/products.tsx
import { Link } from "@remix-run/react";
import { getProducts } from "~/data";

export default function Products() {
  const products = getProducts(); // Fetch your product data

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}