import { useState } from "react";
import CreatableSelect from "react-select/creatable";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const colourStyles = {
  control: (styles, state) => ({
    ...styles,
    border: state.isFocused ? "1px solid #FA7316" : "1px solid #E5E7EB",
    // This line disable the blue border
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      outline: state.isFocused ? "1px solid #FA7316" : "1px solid #E5E7EB",
    },
    backgroundColor: "",
    // border: "1px solid #E5E7EB",
    padding: "3px 6px",
  }),
};

const AddToy = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
      <form className="add-toy-form w-8/12 mx-auto py-20">
        <div className="flex gap-8 mb-6">
          <div className="w-1/2 relative">
            <input
              className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              name="toyTitle"
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-gray-600 bg-white">
              Toy Title
            </span>
          </div>
          <div className="w-1/2 relative">
            {/* <input
              className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              name=""
              id=""
            /> */}
            <CreatableSelect
              className=""
              isMulti
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              styles={colourStyles}
            />
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
              name="sellerName"
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-gray-600 bg-white">
              Seller Name
            </span>
          </div>
          <div className="w-1/2 relative">
            <input
              className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="email"
              name="sellerEmail"
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
              name="price"
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-gray-600 bg-white">
              Price
            </span>
          </div>
          <div className="w-1/2 relative">
            <input
              className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              name="quantity"
            />
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-gray-600 bg-white">
              Quantity
            </span>
          </div>
          <div className="w-1/2 relative">
            <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-gray-600 bg-white">
              Rating
            </span>
            <input
              className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="w-full relative mb-6">
          <span className="absolute -top-1/2 transform translate-y-2 -z-0 left-6 px-2 text-gray-600 bg-white">
            Picture URL
          </span>
          <input
            className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="w-full relative mb-6">
          <span className="absolute top-0 transform -translate-y-3 -z-0 left-6 px-2 text-gray-600 bg-white">
            Toy Description
          </span>
          <textarea
            className="border rounded w-full px-4 py-2 z-50 focus:outline-orange-500"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
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
