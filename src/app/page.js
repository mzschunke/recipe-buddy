import Link from "next/link";
import Search from "../../components/Search";

export default function Home() {
  return (
    <>
      <h1>Welcome to the ultimate Recipe App</h1>
      <Link href="/recipes">My recipes</Link>
      <Search />
    </>
  );
}
