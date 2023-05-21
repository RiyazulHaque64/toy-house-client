import Banner from "./Banner";
import Gallery from "./Gallery";
import Stat from "./Stat";
import Subscribe from "./Subscribe";
// import ShopByCategory from "./ShopByCategory";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Banner />
      <Gallery />
      {/* <ShopByCategory /> */}
      <Subscribe />
      <Stat />
    </div>
  );
};

export default Home;
