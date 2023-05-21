import { useContext, useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [toyInfo, setToyInfo] = useState({});
  const [update, setUpdate] = useState(false);
  const url = `https://toy-house-server-khaki.vercel.app/myToys?seller=${user.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url, update]);

  const handleToyDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons;

    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#587bf1",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-house-server-khaki.vercel.app/deleteToy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              setUpdate(!update);
            }
          });
        Swal.fire("Deleted!", "The toy has been deleted.", "success");
      }
    });
  };

  const handleUpdatedData = (event) => {
    event.preventDefault();
    const form = event.target;
    const _id = form.id.value;
    const toyTitle = form.title.value;
    const category = form.category.value;
    const sellerName = form.seller.value;
    const sellerEmail = form.email.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const photoUrl = form.picUrl.value;
    const description = form.description.value;
    const updatedToyInfo = {
      _id,
      toyTitle,
      category,
      sellerEmail,
      sellerName,
      price,
      quantity,
      rating,
      photoUrl,
      description,
    };
    fetch(`https://toy-house-server-khaki.vercel.app/updateToy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToyInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount > 0) {
          setUpdate(!update);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "info",
            title: "Nothing has been updated!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    console.log(updatedToyInfo);
  };

  const handleSort = (condition) => {
    fetch(`https://toy-house-server-khaki.vercel.app/sort/${condition}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  };
  return (
    <div>
      <div className="w-10/12 lg:w-8/12 mx-auto py-6 md:py-16 lg:py-20">
        <div className="flex justify-center gap-2 md:gap-5 items-center mb-4 md:mb-0 md:py-5">
          <p className="text-orange-500 text-sm font-semibold">
            Short by Price:{" "}
          </p>
          <div className="flex gap-2 md:gap-3">
            <div>
              <input
                className="mr-1 text-sm md:text-base"
                type="radio"
                name="sort"
                onClick={() => handleSort("highToLow")}
              />
              <span className="text-sm md:text-base">High to Low</span>
            </div>
            <div>
              <input
                className="mr-1 text-sm"
                type="radio"
                name="sort"
                onClick={() => handleSort("lowToHigh")}
              />
              <span className="text-sm md:text-base">Low to High</span>
            </div>
          </div>
        </div>
        <table className="border w-full">
          <thead className="bg-gray-100 text-gray-800">
            <tr className="border border-gray-100">
              <th className="border text-[12px] md:text-base p-2">#</th>
              <th className="border text-[12px] md:text-base p-2">Image</th>
              <th className="border text-[12px] md:text-base p-2">Name</th>
              <th className="border text-[12px] md:text-base hidden md:block p-2">
                Category
              </th>
              <th className="border text-[12px] md:text-base p-2">Price</th>
              <th className="border text-[12px] md:text-base p-2">Qty</th>
              <th className="border text-[12px] md:text-base p-2">Update</th>
              <th className="border text-[12px] md:text-base p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy, index) => (
              <tr className="border" key={myToy._id}>
                <th className=" border-r p-2 text-center text-gray-700">
                  {index + 1}
                </th>
                <td className="p-2">
                  <img
                    className="w-8 md:w-12 h-8 md:h-12 mx-auto"
                    src={myToy.photoUrl}
                    alt=""
                  />
                </td>
                <td className="p-2 text-[10px] md:text-base text-gray-700">
                  {myToy.toyTitle}
                </td>
                <td className="p-2 text-[10px] md:text-base hidden md:block text-center text-gray-700">
                  {myToy.category}
                </td>
                <td className="p-2 text-[10px] md:text-base text-center text-gray-700">
                  ${myToy.price}
                </td>
                <td className="p-2 text-[10px] md:text-base text-center text-gray-700">
                  {myToy.quantity}
                </td>
                <td className="p-2 text-[10px] md:text-base text-center text-gray-600">
                  <label
                    onClick={() => setToyInfo(myToy)}
                    htmlFor="updateModal"
                  >
                    <FiEdit
                      className="w-6 h-6 mx-auto cursor-pointer duration-200 hover:text-blue-500"
                      title="Update"
                    />
                  </label>
                </td>
                <td className="p-2 text-center text-gray-600">
                  <RiDeleteBinFill
                    onClick={() => handleToyDelete(myToy._id)}
                    className="w-6 h-6 mx-auto cursor-pointer duration-200 hover:text-blue-500"
                    title="Delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update toy modal */}
      <input type="checkbox" id="updateModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box p-0 w-10/12 max-w-5xl">
          <form
            onSubmit={handleUpdatedData}
            className="add-toy-form mx-auto p-10"
          >
            <div className="flex gap-8 mb-6">
              <div className="w-1/2 relative">
                <input
                  className="hidden"
                  type="text"
                  defaultValue={toyInfo._id}
                  name="id"
                />
                <input
                  className="border-2 border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
                  type="text"
                  defaultValue={toyInfo?.toyTitle}
                  name="title"
                />
                <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
                  Toy Title
                </span>
              </div>
              <div className="w-1/2 relative">
                <select
                  className="border-2 border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500 pr-20"
                  type="text"
                  name="category"
                >
                  <option value={toyInfo?.category}>{toyInfo?.category}</option>
                  <option value="Teddy Bear">Teddy Bear</option>
                  <option value="Horse">Horse</option>
                  <option value="Dinosaur">Dinosaur</option>
                  <option value="Dogs">Dogs</option>
                </select>
                <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
                  Category
                </span>
              </div>
            </div>
            <div className="flex gap-8 mb-6">
              <div className="w-1/2 relative">
                <input
                  className="border-2 border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
                  type="text"
                  defaultValue={user?.displayName}
                  name="seller"
                />
                <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
                  Seller Name
                </span>
              </div>
              <div className="w-1/2 relative">
                <input
                  className="border-2 border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
                  type="email"
                  defaultValue={user?.email}
                  name="email"
                />
                <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
                  Seller Email
                </span>
              </div>
            </div>
            <div className="flex gap-10 mb-6">
              <div className="w-1/2 relative">
                <input
                  className="border-2 border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
                  type="text"
                  defaultValue={toyInfo?.price}
                  name="price"
                />
                <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
                  Price
                </span>
              </div>
              <div className="w-1/2 relative">
                <input
                  className="border-2 border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
                  type="text"
                  defaultValue={toyInfo?.quantity}
                  name="quantity"
                />
                <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
                  Quantity
                </span>
              </div>
              <div className="w-1/2 relative">
                <input
                  className="border-2 border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
                  type="text"
                  defaultValue={toyInfo?.rating}
                  name="rating"
                />
                <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
                  Rating
                </span>
              </div>
            </div>
            <div className="w-full relative mb-6">
              <input
                className="border-2 border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
                type="text"
                defaultValue={toyInfo?.photoUrl}
                name="picUrl"
              />
              <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
                Picture URL
              </span>
            </div>
            <div className="w-full relative mb-6">
              <textarea
                className="border-2 border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
                defaultValue={toyInfo?.description}
                cols="30"
                rows="6"
                name="description"
              ></textarea>
              <span className="absolute top-0 transform -translate-y-3 -z-0 left-6 px-2 text-blue-600 bg-white">
                Toy Description
              </span>
            </div>
            <div className="w-full flex justify-end gap-5">
              <div className="modal-action mt-0">
                <label
                  htmlFor="updateModal"
                  className="px-8 py-2 bg-orange-500 duration-200 hover:bg-orange-600 cursor-pointer rounded font-semibold text-white"
                >
                  Close
                </label>
              </div>
              <input
                className="px-8 py-2 bg-blue-500 duration-200 hover:bg-blue-600 cursor-pointer rounded font-semibold text-white"
                type="submit"
                value="Update"
              />
            </div>
          </form>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default MyToys;
