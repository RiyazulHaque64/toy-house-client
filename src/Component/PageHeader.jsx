import propTypes from "prop-types";
const PageHeader = ({ headerTitle }) => {
  return (
    <div>
      <div className="bg-[#587bf1] h-36 md:h-60 lg:h-80 flex items-center justify-center border-y-[8px] lg:border-y-[10px] border-dotted border-white">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold lg:font-bold text-white">
          {headerTitle}
        </h2>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  headerTitle: propTypes.string,
};
export default PageHeader;
