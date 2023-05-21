import { Link } from "react-router-dom";
import { BsFillEnvelopePaperHeartFill, BsSendFill } from "react-icons/bs";

const Subscribe = () => {
  return (
    <div
      className="mt-20 flex flex-col md:flex-row p-12 bg-orange-100 items-center"
      data-aos="flip-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="p-10 pt-0 md:pt-16 md:p-16 mb-10 md:mb-0">
        <BsFillEnvelopePaperHeartFill className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rotate-45" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-caveat md:text-3xl lg:text-5xl font-bold mb-4">
          Subscribe for Offer!!!
        </h2>
        <p className="mb-10 md:mb-20">
          toyHouse{" "}
          <Link className="hover:text-orange-500 duration-200" to="signup">
            Signup
          </Link>
        </p>
        <div className="relative">
          <input
            className="w-full bg-transparent border-b-2 border-black py-2 focus:outline-none focus:border-b-2 focus:border-orange-500"
            type="text"
            placeholder="address@example.com"
          />
          <span className="absolute top-1/4 transform translate-y-1 lg:translate-y-2 right-0">
            <BsSendFill className="duration-200 hover:text-orange-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
