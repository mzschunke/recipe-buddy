import recipes from "../../src/app/recipes/recipes.json";
import Link from "next/link";

export default function RecipeCard({ id }) {
  const product = recipes.filter((food) => food.id === parseInt(id));
  console.log("Chosen Product is:", product);
  return (
    <>
      <div>ID: {id}</div>
      <br></br>
      <div>{product.title}</div>
      <br></br>
      <Link href="/recipes">Go back</Link>
    </>
  );
}
