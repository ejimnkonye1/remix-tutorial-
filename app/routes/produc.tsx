// import { Link } from "@remix-run/react";

// interface Product {
//   id: string;
//   name: string;
// }

// export default function Products() {
//   const products: Product[] = [
//     { id: "0", name: "Product 1" },
//     { id: "2", name: "Product 2" },
//     { id: "1", name: "Product 3" },
//   ];
// console.log("Products:");
// products.forEach((product) => {
//   console.log(`ID: ${product.id}, Name: ${product.name}`);
// });
//   console.log("Products:", products);  // Log the products array

//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <Link to={`/products/${product.id}`}>{product.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import { Link } from "@remix-run/react";

export default function Products() {
  const products = [
    { name: "Product 1" },
    { name: "Product 2" },
    { name: "Product 3" },
  ];

  console.log("Products:");
  products.forEach((product, index) => {
    console.log(`ID: ${index + 1}, Name: ${product.name}`);
  });

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {/* Use index+1 as the id */}
            <Link to={`/products/${index + 1}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

