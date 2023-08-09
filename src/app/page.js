import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to the ultimate Recipe App</h1>
      <Link href="/recipes">Go to Recipes</Link>
    </>
  );
}
