/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// Simulating an API call that might fail
export const loader: LoaderFunction = async () => {
  try {
    // Simulate a failure scenario
    const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      }
    );
    return json(users);
  } catch (error: any) {
    throw new Response(error.message, { status: 500 });
  }
};

// ✅ Error Boundary for handling fetch errors
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="p-6 text-red-500">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <p>{error.message}</p>
    </div>
  );
}

// Page Component
export default function Users() {
  const users = useLoaderData<{ id: number; name: string; email: string }[]>();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users List</h2>
      <ul className="list-disc pl-6">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
