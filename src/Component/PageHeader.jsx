import propTypes from "prop-types";
const PageHeader = ({ headerTitle }) => {
  return (
    <div>
      <div className="bg-[#587bf1] h-80 flex items-center justify-center border-y-[10px] border-dotted border-white">
        <h2 className="text-7xl font-bold text-white">{headerTitle}</h2>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  headerTitle: propTypes.string,
};
export default PageHeader;
