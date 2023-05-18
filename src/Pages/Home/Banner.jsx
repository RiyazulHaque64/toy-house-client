import bannerImg from "../../assets/image/BANNER IMAGE 1.png";
const Banner = () => {
  return (
    <div className="w-full bg-[#587bf1] pt-10 border-y-[10px] border-dotted border-white">
      <div className="w-10/12 mx-auto flex items-center">
        <div className="w-1/2 text-center">
          <h4 className="text-5xl font-bold  mb-6 text-gray-800">
            Hot & Trendy
          </h4>
          <h2 className="text-7xl font-extrabold mb-6 text-orange-400">
            Beautiful Toys
          </h2>
          <p className="text-xl mb-6">Get upto 30% off on your first order</p>
          <button className="px-6 py-4 rounded-xl font-bold bg-orange-400 text-white text-xl">
            View Toys
          </button>
        </div>
        <div className="w-1/2">
          <img className="h-[700px] w-auto mx-auto" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
