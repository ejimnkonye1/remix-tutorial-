import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
    
       
        <Link to="/about">Go to About Page</Link>
        <Link to="/contacts" className="text-blue-600 underline">
        View Contacts
      </Link>
      <Link to="/users">Go to Users List</Link>
      <Link to={'/products'}>products</Link>
      
      </div>
      <Outlet/>
    </div>
  );
}


