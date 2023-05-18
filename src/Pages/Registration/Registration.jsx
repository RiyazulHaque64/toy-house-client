import { useState } from "react";
import PageHeader from "../../Component/PageHeader";
import registrationImg from "../../assets/image/registration-illustration2.png";
import { TiTick } from "react-icons/ti";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <PageHeader headerTitle="Signup" />
      <div className="flex items-center justify-between w-10/12 mx-auto py-24 gap-20">
        <div className="border w-1/2">
          <img src={registrationImg} alt="" />
        </div>
        <form className="w-1/2 flex flex-col gap-5">
          <div className="input-box relative w-full">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={`w-full px-4 py-4 border-2 border-gray-300 focus:border-[#587bf1] outline-none rounded-xl text-xl duration-500 ${
                name && "input-focus"
              }`}
              type="text"
              name="name"
            />
            <span
              className={`translate-y-1 absolute left-0 px-4 py-3 text-xl pointer-events-none duration-500 text-gray-500 ${
                name && "input-valid"
              }`}
            >
              {name ? (
                <div className="flex items-center gap-1">
                  <span>Name </span>
                  <TiTick />
                </div>
              ) : (
                "Type your name"
              )}
            </span>
          </div>
          <div className="input-box relative w-full">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={`w-full px-4 py-4 border-2 border-gray-300 focus:border-[#587bf1] outline-none rounded-xl text-xl duration-500 ${
                email && "input-focus"
              }`}
              type="email"
              name="email"
            />
            <span
              className={`translate-y-1 absolute left-0 px-4 py-3 text-xl pointer-events-none duration-500 text-gray-500 ${
                email && "input-valid"
              }`}
            >
              Type your email
            </span>
          </div>
          <div className="input-box relative w-full">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className={`w-full px-4 py-4 border-2 border-gray-300 focus:border-[#587bf1] outline-none rounded-xl text-xl duration-500 ${
                password && "input-focus"
              }`}
              type="password"
              name="password"
            />
            <span
              className={`translate-y-1 absolute left-0 px-4 py-3 text-xl pointer-events-none duration-500 text-gray-500 ${
                password && "input-valid"
              }`}
            >
              Set a password
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
