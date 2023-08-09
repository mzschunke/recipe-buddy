import receipts from "../receipts.json";

export default function RecipeCard() {
  const currentRecipe = receipts.find((recipe) => recipe.id === id);
  console.log(currentRecipe);

  if (!currentRecipe) {
    return null;
  }

  const { title } = currentRecipe;

  return (
    <div>
      {setsData.map(({ id, title }) => (
        <div key={id}>
          <h2>{title}</h2>
        </div>
      ))}
    </div>
  );
}
