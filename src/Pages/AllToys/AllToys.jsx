import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const AllToys = () => {
  const [searchText, setSearchText] = useState("Electric");
  const [allToys, setAllToys] = useState([]);
  useEffect(() => {
    fetch("https://toy-house-server-khaki.vercel.app/allToys", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const searchHandler = () => {
    if (searchText) {
      fetch(
        `https://toy-house-server-khaki.vercel.app/searchByName/${searchText}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setAllToys(data));
    }
  };
  return (
    <div>
      <div className="w-10/12 flex justify-center mx-auto pt-10 md:pt-16 lg:pt-20 mb-6 md:mb-10">
        <div className="relative">
          <input
            className="border-2 border-orange-500 px-4 py-2 w-full md:w-96 focus:outline-blue-700 rounded"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search toy"
          />
          <BiSearch
            onClick={searchHandler}
            className="absolute top-1/2 transform -translate-y-3 text-gray-500 hover:text-blue-700 duration-200 cursor-pointer right-2 w-6 h-6"
          />
        </div>
      </div>
      <div className="w-10/12 lg:w-8/12 mx-auto pb-20">
        <table className="border w-full">
          <thead className="bg-gray-100 text-gray-800">
            <tr className="border border-gray-100">
              <th className="border p-1 text-[12px] md:text-base md:p-2">#</th>
              <th className="border p-1 text-[12px] md:text-base md:p-2">
                Image
              </th>
              <th className="border p-1 text-[12px] md:text-base md:p-2">
                Name
              </th>
              <th className="border p-1 text-[12px] md:text-base md:p-2">
                Seller
              </th>
              <th className="border hidden md:block p-1 text-sm md:text-base md:p-2">
                Category
              </th>
              <th className="border p-1 text-sm md:text-base md:p-2">Price</th>
              <th className="border p-1 text-sm md:text-base md:p-2">
                Instock
              </th>
              <th className="border p-1 text-sm md:text-base md:p-2">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy, index) => (
              <tr className="border" key={toy._id}>
                <th className=" border-r text-sm p-1 text-center text-gray-700">
                  {index + 1}
                </th>
                <td className="p-2">
                  <img
                    className="w-8 md:w-12 h-8 lg:h-12 mx-auto"
                    src={toy.photoUrl}
                    alt=""
                  />
                </td>
                <td className="p-1 text-[10px] md:p-2 text-gray-700">
                  {toy.toyTitle}
                </td>
                <td className="p-1 text-[10px] md:p-2">{toy.sellerName}</td>
                <td className="p-1 text-[10px] hidden md:block md:p-2 text-center text-gray-700">
                  {toy.category}
                </td>
                <td className="p-1 text-[10px] md:p-2 text-center text-gray-700">
                  ${toy.price}
                </td>
                <td className="p-1 text-[10px] md:p-2 text-center text-gray-700">
                  {toy.quantity}
                </td>
                <td className="p-1 text-[10px] md:p-2 text-center text-gray-600">
                  <Link to={`/viewDetails/${toy._id}`}>
                    <FaEye
                      className="w-4 md:w-6 h-4 md:h-6 mx-auto cursor-pointer duration-200 hover:text-blue-500"
                      title="View Details"
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
