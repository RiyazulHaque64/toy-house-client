import { Link } from "react-router-dom";
import bannerImg from "../../assets/image/BANNER IMAGE 1.png";
const Banner = () => {
  return (
    <div
      className="w-full bg-[#587bf1] pt-5 md:pt-10 px-5 md:px-10 border-y-[10px] border-dotted border-white rounded"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div
          className="w-full md:w-1/2 text-center"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h4 className="font-caveat text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-gray-800">
            Hot & Trendy
          </h4>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-orange-400">
            Beautiful Toys
          </h2>
          <p className="md:text-xl mb-4 md:mb-6">
            Get upto 30% off on your first order
          </p>
          <Link to="allToys">
            <button className="px-4 md:px-6 py-2 md:py-4 rounded-xl font-bold bg-orange-400 text-white md:text-xl">
              View Toys
            </button>
          </Link>
        </div>
        <div
          className="w-full md:w-1/2"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="h-80 md:h-[500] lg:h-[450px] xl:h-[600] w-auto mx-auto"
            src={bannerImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
