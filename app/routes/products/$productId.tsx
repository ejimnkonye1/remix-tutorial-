// app/routes/products/$productId.tsx
import { json, LoaderFunction, useLoaderData } from "@remix-run/react";
import { getProduct } from "~/data"; // Adjust the import path as necessary


// Define the Product interface
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

// Loader function to fetch product data based on the productId from the URL
export const loader: LoaderFunction = async ({ params }) => {
  const productId = params.productId; // Get the productId from the URL parameters

  // Fetch the product by ID
  const product = getProduct(productId);

  // If the product is not found, throw a 404 error
  if (!product) {
    throw new Response("Not Found", { status: 404 });
  }

  // Return the product data as JSON
  return json(product);
};

// ProductDetail component to display the product information
export default function ProductDetail() {
  const product = useLoaderData<Product>(); // Get the product data from the loader with type

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
}