import Image from "next/image";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function RandomMeal() {
  const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!data && isLoading) {
    return <div>Loading...</div>;
  }

  // console.log("Data:", data.meals[0]);
  if (data) {
    const { meals } = data;
    const randomMeal = meals[0];
    const image = data.meals[0].strMealThumb;
    console.log("Image found:", image);

    return (
      <>
        <div>
          <h2>Random Meal</h2>
          <p>Meal Name: {randomMeal.strMeal}</p>
          <Image
            src={image}
            width={200}
            height={200}
            alt="Picture of a random meal"
          />
        </div>
        <div>
          <h2>Random Meal</h2>
          <p>Meal Name: {randomMeal.strMeal}</p>
          <Image
            src={image}
            width={200}
            height={200}
            alt="Picture of a random meal"
          />
        </div>
        <div>
          <h2>Random Meal</h2>
          <p>Meal Name: {randomMeal.strMeal}</p>
          <Image
            src={image}
            width={200}
            height={200}
            alt="Picture of a random meal"
          />
        </div>
      </>
    );
  }
  return null;
}
