import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const AllToys = () => {
  const [searchText, setSearchText] = useState("");
  const [allToys, setAllToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToys", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  return (
    <div>
      <div className="w-10/12 flex justify-center mx-auto pt-20 mb-10">
        <div className="relative">
          <input
            className="border-2 border-orange-500 px-4 py-2 w-96 focus:outline-blue-700 rounded"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search toy"
          />
          <BiSearch className="absolute top-1/2 transform -translate-y-3 text-gray-500 hover:text-blue-700 duration-200 cursor-pointer right-2 w-6 h-6" />
        </div>
        <p>{searchText}</p>
      </div>
      <div className="w-8/12 mx-auto pb-20">
        <table className="border w-full">
          <thead className="bg-gray-100 text-gray-800">
            <tr className="border border-gray-100">
              <th className="border p-2">#</th>
              <th className="border p-2">Image</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Seller</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Available Qty.</th>
              <th className="border p-2">View Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy, index) => (
              <tr className="border" key={toy._id}>
                <th className=" border2p-2 text-center text-gray-700">
                  {index + 1}
                </th>
                <td className="p-2">
                  <img
                    className="w-12 h-12 mx-auto"
                    src={toy.photoUrl}
                    alt=""
                  />
                </td>
                <td className="p-2 text-gray-700">{toy.toyTitle}</td>
                <td className="p-2">{toy.sellerName}</td>
                <td className="p-2 text-center text-gray-700">
                  {toy.category}
                </td>
                <td className="p-2 text-center text-gray-700">${toy.price}</td>
                <td className="p-2 text-center text-gray-700">
                  {toy.quantity}
                </td>
                <td className="p-2 text-center text-gray-600">
                  <Link to={`/viewDetails/${toy._id}`}>
                    <FaEye
                      className="w-6 h-6 mx-auto cursor-pointer duration-200 hover:text-blue-500"
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
