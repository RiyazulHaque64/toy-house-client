import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const toyDetails = useLoaderData();
  const {
    photoUrl,
    toyTitle,
    sellerName,
    sellerEmail,
    price,
    quantity,
    rating,
    description,
  } = toyDetails;
  return (
    <div>
      <div className="flex w-10/12 mx-auto gap-6 items-center border my-20">
        <img className="border-r w-[500px] h-[500px]" src={photoUrl} alt="" />
        <div className="p-10 space-y-4">
          <h2 className="text-4xl text-gray-800 font-semibold">{toyTitle}</h2>
          <div className="flex items-center gap-4">
            <p className="font-bold text-xl">
              Price: <span className="text-orange-500">${price}</span>
            </p>
            <p className="font-semibold text-gray-700">
              Instock: {quantity} pcs
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-gray-700">
              <span className="font-semibold">Seller:</span> {sellerName}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Seller Email:</span> {sellerEmail}
            </p>
          </div>

          <p>{description}</p>
          <p className="text-orange-500 font-bold">
            <span className="font-semibold text-gray-700">Rating:</span>{" "}
            {rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
