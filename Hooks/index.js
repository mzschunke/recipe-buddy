import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Fetcher() {
  const URL = "https://www.themealdb.com/api/json/v1/1/random.php";
  const { data, error, isLoading } = useSWR(URL, fetcher);
  console.log("Data:", data);
  console.log("Error:", error);
}

// export default async function fetchData() {
//   const response = await fetch(
//     "https://www.themealdb.com/api/json/v1/1/random.php"
//   );
//   const data = await response.json();
//   console.log("data:", data.meals[0]);
// }
