import propTypes from "prop-types";
import pageBanner from "../assets/image/pageBanner2.jpg";
const PageHeader = ({ headerTitle }) => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="relative">
        <img
          className="h-40 md:h-72 lg:h-80 w-full object-cover rounded"
          src={pageBanner}
          alt=""
        />
        <div className="bg-black/50 rounded absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
            {headerTitle}
          </h1>
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  headerTitle: propTypes.string,
};
export default PageHeader;
