import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully added the toy", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      });
    reset();
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
              className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              {...register("toyTitle")}
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
              Toy Title
            </span>
          </div>
          <div className="w-1/2 relative">
            <select
              className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500 pr-20"
              type="text"
              {...register("category")}
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
        <div className="flex gap-8 mb-6">
          <div className="w-1/2 relative">
            <input
              className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              defaultValue={user?.displayName}
              {...register("sellerName")}
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
              Seller Name
            </span>
          </div>
          <div className="w-1/2 relative">
            <input
              className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="email"
              defaultValue={user?.email}
              {...register("sellerEmail")}
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
              Seller Email
            </span>
          </div>
        </div>
        <div className="flex gap-10 mb-6">
          <div className="w-1/2 relative">
            <input
              className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              {...register("price")}
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
              Price
            </span>
          </div>
          <div className="w-1/2 relative">
            <input
              className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              {...register("quantity")}
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
              Quantity
            </span>
          </div>
          <div className="w-1/2 relative">
            <input
              className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              {...register("rating")}
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
            {...register("photoUrl")}
          />
          <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-blue-600 bg-white">
            Picture URL
          </span>
        </div>
        <div className="w-full relative mb-6">
          <textarea
            className="border border-blue-500 rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
            {...register("description")}
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
      <ToastContainer />
    </div>
  );
};

export default AddToy;
