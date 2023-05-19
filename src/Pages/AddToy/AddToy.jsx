import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="add-toy-form w-8/12 mx-auto py-20"
      >
        <div className="flex gap-8 mb-6">
          <div className="w-1/2 relative">
            <input
              className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              {...register("toyTitle")}
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-gray-600 bg-white">
              Toy Title
            </span>
          </div>
          <div className="w-1/2 relative">
            <select
              className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500 pr-20"
              type="text"
              {...register("category")}
            >
              <option value="Horse">Select a category</option>
              <option value="Horse">Teddy Bear</option>
              <option value="Horse">Horse</option>
              <option value="Horse">Dinosaur</option>
              <option value="Horse">Dogs</option>
            </select>
            {/* <div className="border rounded w-full px-4 py-2 z-50 hover:border-orange-500 pr-20">
              Select a category
            </div>
            <ul className="border border-red-500 px-4 py-2">
              <li>Teddy Bear</li>
              <li>Horse</li>
              <li>Dinosaur</li>
              <li>Dogs</li>
            </ul> */}
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-gray-600 bg-white">
              Category
            </span>
          </div>
        </div>
        <div className="flex gap-8 mb-6">
          <div className="w-1/2 relative">
            <input
              className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              defaultValue={user?.displayName}
              {...register("sellerName")}
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-gray-600 bg-white">
              Seller Name
            </span>
          </div>
          <div className="w-1/2 relative">
            <input
              className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="email"
              defaultValue={user?.email}
              {...register("sellerEmail")}
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-gray-600 bg-white">
              Seller Email
            </span>
          </div>
        </div>
        <div className="flex gap-10 mb-6">
          <div className="w-1/2 relative">
            <input
              className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              {...register("price")}
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-gray-600 bg-white">
              Price
            </span>
          </div>
          <div className="w-1/2 relative">
            <input
              className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              {...register("quantity")}
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-gray-600 bg-white">
              Quantity
            </span>
          </div>
          <div className="w-1/2 relative">
            <input
              className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              {...register("rating")}
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-gray-600 bg-white">
              Rating
            </span>
          </div>
        </div>
        <div className="w-full relative mb-6">
          <input
            className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
            type="text"
            {...register("photoUrl")}
          />
          <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-gray-600 bg-white">
            Picture URL
          </span>
        </div>
        <div className="w-full relative mb-6">
          <textarea
            className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
            {...register("description")}
            cols="30"
            rows="10"
          ></textarea>
          <span className="absolute top-0 transform -translate-y-3 -z-0 left-6 px-2 text-gray-600 bg-white">
            Toy Description
          </span>
        </div>
        <div className="w-full text-end">
          <button className="px-8 py-2 border border-orange-500 duration-200 hover:text-orange-600 cursor-pointer rounded font-semibold text-orange-500 mr-4">
            Reset
          </button>
          <input
            className="px-8 py-2 bg-orange-500 duration-200 hover:bg-orange-600 cursor-pointer rounded font-semibold text-white"
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
