import { json, LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { users } from "~/data"
//how to fecth data with loader
type User = {
    id: number;
    name: string;
    email: string;
  };
export const  loader : LoaderFunction = async ()=>{
return json(users)
}

// how to fetch data from api
// export const loader: LoaderFunction = async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/`);
//   const user = await response.json();
//   return json(user);
// }
export default function Item (){
    // const users = useLoaderData<typeof loader>();
    const users = useLoaderData<User[]>();
    return(
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
    )
}