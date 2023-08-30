import useSWR from "swr";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Fetcher() {
  const URL = "https://www.themealdb.com/api/json/v1/1/random.php";
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!data && isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    const { meals } = data;
    const randomMeal = meals[0];
    const image = data.meals[0].strMealThumb;
    console.log("Image found:", image);

    return (
      <div>
        <h2>Random Meal</h2>
        <p>Meal Name: {randomMeal.strMeal}</p>
        <Image
          src={image}
          width={250}
          height={250}
          alt="Picture of a random meal"
        />
      </div>
    );
  }

  return null;
}
