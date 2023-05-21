import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="w-full mx-auto mt-20">
      <h1
        className="mx-auto text-center relative before:content-[''] before:h-[1px] before:w-1/2 before:bg-gray-300 before:absolute before:top-1/2 before:right-0 before:-z-10 after:content-[''] after:h-[1px] after:w-1/2 after:bg-gray-300 after:absolute after:top-1/2 after:left-0 after:-z-10 mb-10"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <span className="bg-white px-2 md:text-xl text-orange-500 font-bold">
          See Our Attractive Toy
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="w-full h-80 border border-gray-100"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full p-10 h-full"
            src="https://github.com/RiyazulHaque64/assignment-11-image/blob/main/Electric%20Horse%20Toys%20For%20Children.jpg?raw=true"
            alt="Toy Image"
          />
        </div>
        <div
          className="w-full h-80 border border-gray-100"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full p-10 h-full"
            src="https://github.com/RiyazulHaque64/assignment-11-image/blob/main/Electronic%20Dog%20Toy%20Pet.jpg?raw=true"
            alt="Toy Image"
          />
        </div>
        <div
          className="w-full h-80 border border-gray-100"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full p-10 h-full"
            src="https://raw.githubusercontent.com/RiyazulHaque64/assignment-11-image/main/Electronic%20dog%20music%20toy.webp"
            alt="Toy Image"
          />
        </div>
        <div
          className="w-full h-80 border border-gray-100"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full p-10 h-full"
            src="https://github.com/RiyazulHaque64/assignment-11-image/blob/main/Frantic%20Premium%20Soft%20Toy.jpg?raw=true"
            alt="Toy Image"
          />
        </div>
        <div
          className="w-full h-80 border border-gray-100"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full p-10 h-full"
            src="https://raw.githubusercontent.com/RiyazulHaque64/assignment-11-image/main/Plush%20Puppy%20Baby%20Toy.webp"
            alt="Toy Image"
          />
        </div>
        <div
          className="w-full h-80 border border-gray-100"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full p-10 h-full"
            src="https://github.com/RiyazulHaque64/assignment-11-image/blob/main/Giant%20Dinosaur%20Toys.jpg?raw=true"
            alt="Toy Image"
          />
        </div>
        <div
          className="w-full h-80 border border-gray-100"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full p-10 h-full"
            src="https://github.com/RiyazulHaque64/assignment-11-image/blob/main/Horse%20Toys%20for%20Kids.jpg?raw=true"
            alt="Toy Image"
          />
        </div>
        <div
          className="w-full h-80 border border-gray-100"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full p-10 h-full"
            src="https://github.com/RiyazulHaque64/assignment-11-image/blob/main/YONGJULE%20Large%20Soft%20Dinosaur%20Toys.jpg?raw=true"
            alt="Toy Image"
          />
        </div>
        <div
          className="w-full h-80 border border-gray-100"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="w-full p-10 h-full"
            src="https://github.com/RiyazulHaque64/assignment-11-image/blob/main/Jumbo%20Dinosaur%20Toys.jpg?raw=true"
            alt="Toy Image"
          />
        </div>
      </div>
      <div className="w-full text-center mt-8">
        <Link to="/allToys">
          <button
            className="px-6 py-2 bg-orange-500 rounded font-semibold text-white mx-auto"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            See All Toys
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
