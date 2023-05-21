import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
const ShopByCategory = () => {
  const [categoryToys, setCategoryToys] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Teddy Bear");
  console.log(categoryToys);
  useEffect(() => {
    fetch(
      `https://toy-house-server-khaki.vercel.app/allToys/${activeCategory}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setCategoryToys(data));
  }, [activeCategory]);
  return (
    <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
      <h1 className="text-xl font-semibold mb-10">Shop by category</h1>
      <div className="">
        <button
          className={`px-4 py-2 text-white border-r border-orange-400 font-semibold ${
            activeCategory == "Teddy Bear" ? "bg-orange-600" : "bg-orange-500"
          }`}
          onClick={() => setActiveCategory("Teddy Bear")}
        >
          Teddy Bear
        </button>
        <button
          className={`px-4 py-2 text-white border-r border-orange-400 font-semibold ${
            activeCategory == "Horse" ? "bg-orange-600" : "bg-orange-500"
          }`}
          onClick={() => setActiveCategory("Horse")}
        >
          Horse
        </button>
        <button
          className={`px-4 py-2 text-white border-r border-orange-400 font-semibold ${
            activeCategory == "Dinosaur" ? "bg-orange-600" : "bg-orange-500"
          }`}
          onClick={() => setActiveCategory("Dinosaur")}
        >
          Dinosaur
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {categoryToys.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
