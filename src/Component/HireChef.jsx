import chefIllustration from "../assets/image/chef_illustration.png";

const HireChef = () => {
  return (
    <div className="lg:grid lg:grid-cols-8 items-center justify-between gap-20">
      <div className="col-span-4 p-4 lg:p-10 mb-8 lg:mb-0">
        <img src={chefIllustration} alt="Contact Illustration" />
      </div>
      <form className="col-span-4 flex flex-col gap-4" action="">
        <input
          className="border border-gray-500 focus:outline-lime-600 rounded-full px-4 py-2 shadow"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className="border border-gray-500 focus:outline-lime-600 rounded-full px-4 py-2 shadow"
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />
        <input
          className="border border-gray-500 focus:outline-lime-600 rounded-full px-4 py-2 shadow"
          type="text"
          name="number"
          placeholder="Your Number"
          required
        />
        <textarea
          className="border border-gray-500 focus:outline-lime-600 rounded-xl px-4 py-2 shadow"
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Description"
        ></textarea>
        <input
          className="border btn-bg text-white duration-200 bg-lime-500 hover:bg-lime-600 text-xl font-semibold rounded-full px-4 py-2 cursor-pointer"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default HireChef;
