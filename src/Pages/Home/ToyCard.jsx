/* eslint-disable */

import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const {
    _id,
    photoUrl,
    toyTitle,
    price,
    quantity,
    sellerName,
    sellerEmail,
    rating,
  } = toy;
  return (
    <div className="border p-6 space-y-4 flex flex-col">
      <img className="lg:h-80 2xl:h-96" src={photoUrl} alt="" />
      <div className="space-y-2 grow">
        <h2 className="font-semibold text-2xl text-gray-800">{toyTitle}</h2>
        <div className="flex gap-5">
          <p className="font-semibold text-gray-800">
            Price: <span className="text-orange-500 font-bold">{price}</span>
          </p>
          <p>
            <span className="font-semibold text-gray-800">Instock:</span>
            {quantity} Pcs{" "}
          </p>
        </div>
        <div className="flex gap-5">
          <p className="text-gray-800 text-sm">
            <span className="font-semibold">Seller: </span>
            {sellerName}
          </p>
          <p className="text-gray-800 text-sm">
            <span className="font-semibold">Seller Email: </span>
            {sellerEmail}
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold text-gray-800">
          Rating: <span className="font-bold text-orange-500">{rating}</span>
        </p>
        <Link to={`#`}>Details</Link>
      </div>
    </div>
  );
};

export default ToyCard;
