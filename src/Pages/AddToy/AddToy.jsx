import { useContext } from "react";
// import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import PageHeader from "../../Component/PageHeader";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleUpdatedData = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyTitle = form.title.value;
    const category = form.category.value;
    const sellerName = form.seller.value;
    const sellerEmail = form.email.value;
    const price = parseInt(form.price.value);
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const photoUrl = form.picUrl.value;
    const description = form.description.value;
    const toyInfo = {
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
    if (toyTitle && price) {
      fetch("https://toy-house-server-khaki.vercel.app/addToy", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(toyInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "You have successfully added a toy",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
    form.reset();
  };
  return (
    <div>
      <PageHeader headerTitle="Add a Toy" />
      <form
        onSubmit={handleUpdatedData}
        className="add-toy-form w-10/12 md:w-8/12 mx-auto py-14 lg:py-20"
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 mb-6">
          <div className="w-full md:w-1/2  relative">
            <input
              className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              name="title"
              required
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
              Toy Title
            </span>
          </div>
          <div className="w-full md:w-1/2  relative">
            <select
              className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500 pr-20"
              type="text"
              name="category"
            >
              <option value="No Category">Select a category</option>
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
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 mb-6">
          <div className="w-full md:w-1/2  relative">
            <input
              className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              defaultValue={user?.displayName}
              name="seller"
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
              Seller Name
            </span>
          </div>
          <div className="w-full md:w-1/2  relative">
            <input
              className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="email"
              defaultValue={user?.email}
              name="email"
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
              Seller Email
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 mb-6">
          <div className="w-full md:w-1/2  relative">
            <input
              className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              name="price"
              required
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
              Price
            </span>
          </div>
          <div className="w-full md:w-1/2  relative">
            <input
              className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              name="quantity"
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
              Quantity
            </span>
          </div>
          <div className="w-full md:w-1/2  relative">
            <input
              className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              name="rating"
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
              Rating
            </span>
          </div>
        </div>
        <div className="w-full relative mb-6">
          <input
            className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
            type="text"
            name="picUrl"
          />
          <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
            Picture URL
          </span>
        </div>
        <div className="w-full relative mb-6">
          <textarea
            className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
            name="description"
            cols="30"
            rows="10"
          ></textarea>
          <span className="absolute top-0 transform -translate-y-3 -z-0 left-6 px-2 text-blue-600 bg-white">
            Toy Description
          </span>
        </div>
        <div className="w-full text-end">
          <input
            className="px-8 py-2 bg-blue-500 duration-200 hover:bg-blue-600 cursor-pointer rounded font-semibold text-white"
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
