// app/routes/about.tsx
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

// Loader function to fetch data
export async function loader() {
  const aboutData = [
    { id: 1, title: "Our Mission", slug: "mission" },
    { id: 2, title: "Our Team", slug: "team" },
    { id: 3, title: "Our History", slug: "history" },
  ];
  return json(aboutData);
}

export default function About() {
  const aboutData = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to the About page! Learn more about our company.</p>
      <ul>
        {aboutData.map((item) => (
          <li key={item.id}>
            <Link to={`/about/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}