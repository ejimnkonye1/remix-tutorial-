// app/data.ts

export const contacts = [
    { id: "1", name: "Alice Johnson", email: "alice@example.com", phone: "123-456-7890" },
    { id: "2", name: "Kingsley", email: "kingsley@example.com", phone: "987-654-3210" },
    { id: "3", name: "Onyedika", email: "onyedika@example.com", phone: "555-555-5555" },
  ];
  // src/data/products.ts
// app/utils/products.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is product 1',
    price: 10.99,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is product 2',
    price: 9.99,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is product 3',
    price: 12.99,
  },
];

export const getProducts = (): Product[] => {
  return products;
};

export const getProduct = (id: string): Product | null => {
  const productId = parseInt(id);
  const product = products.find((product) => product.id === productId);
  return product || null;
};

export const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Michael Johnson", email: "michael@example.com" },
];