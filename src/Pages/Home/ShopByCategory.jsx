import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
const ShopByCategory = () => {
  const [categoryToys, setCategoryToys] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Teddy Bear");
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
    <div className="w-full md:w-10/12 mx-auto flex flex-col justify-center items-center pt-20">
      <h1
        className="mx-auto text-center relative before:content-[''] before:h-[1px] before:w-1/2 before:bg-gray-300 before:absolute before:top-1/2 before:right-0 before:-z-10 after:content-[''] after:h-[1px] after:w-1/2 after:bg-gray-300 after:absolute after:top-1/2 after:left-0 after:-z-10 mb-10"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <span className="bg-white px-2 md:text-xl text-orange-500 font-bold">
          Shop by Category
        </span>
      </h1>
      <div className="">
        <button
          className={`px-2 md:px-4 py-2 text-white border-r border-orange-400 font-semibold ${
            activeCategory == "Teddy Bear" ? "bg-orange-600" : "bg-orange-500"
          }`}
          onClick={() => setActiveCategory("Teddy Bear")}
        >
          Teddy Bear
        </button>
        <button
          className={`px-2 md:px-4 py-2 text-white border-r border-orange-400 font-semibold ${
            activeCategory == "Horse" ? "bg-orange-600" : "bg-orange-500"
          }`}
          onClick={() => setActiveCategory("Horse")}
        >
          Horse
        </button>
        <button
          className={`px-2 md:px-4 py-2 text-white border-r border-orange-400 font-semibold ${
            activeCategory == "Dinosaur" ? "bg-orange-600" : "bg-orange-500"
          }`}
          onClick={() => setActiveCategory("Dinosaur")}
        >
          Dinosaur
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {categoryToys.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
