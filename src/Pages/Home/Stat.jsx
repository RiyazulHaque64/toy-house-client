const Stat = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20">
      <div
        className="border-b md:border-r md:border-b-0 p-10 flex flex-col items-center justify-center space-y-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img
          className="w-16 h-16"
          src="https://cdn.shopify.com/s/files/1/1152/4590/files/happiness_small.png?v=1676974815"
          alt=""
        />
        <h2 className="text-2xl font-semibold text-gray-700">
          100% Satisfaction
        </h2>
        <p>If You Are Unable</p>
      </div>
      <div
        className="border-b md:border-r md:border-b-0 p-10 flex flex-col items-center justify-center space-y-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img
          className="w-16 h-16"
          src="https://cdn.shopify.com/s/files/1/1152/4590/files/online-support_small.png?v=1676974980"
          alt=""
        />
        <h2 className="text-2xl font-semibold text-gray-700">Online Support</h2>
        <p>Any Time Support</p>
      </div>
      <div
        className="border-b md:border-r md:border-b-0 p-10 flex flex-col items-center justify-center space-y-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img
          className="w-16 h-16"
          src="https://cdn.shopify.com/s/files/1/1152/4590/files/return-on-investment_small.png?v=1676975087"
          alt=""
        />
        <h2 className="text-2xl font-semibold text-gray-700">Money Returns</h2>
        <p>Guarantee in 7 Days</p>
      </div>
      <div
        className="p-10 flex flex-col items-center justify-center space-y-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img
          className="w-16 h-16"
          src="https://cdn.shopify.com/s/files/1/1152/4590/files/percentage_small.png?v=1676975243"
          alt=""
        />
        <h2 className="text-2xl font-semibold text-gray-700">
          Member Discount
        </h2>
        <p>Customer&apos;s First Order</p>
      </div>
    </div>
  );
};

export default Stat;
