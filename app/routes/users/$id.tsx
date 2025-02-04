// app/routes/users/$userId.tsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

const users = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
//   { id: "3", name: "Alice Johnson" },
];

export const loader = async ({ params }: { params: { userId: string } }) => {
  const user = users.find((user) => user.id === params.userId);
  if (!user) {
    throw new Response("User Not Found", { status: 404 });
  }
  return json(user);
};


export default function UserProfile() {
  const user = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {user.id}</p>
      <p>Name: {user.name}</p>
    </div>
  );
}
