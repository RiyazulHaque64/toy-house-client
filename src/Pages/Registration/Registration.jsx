import { useContext, useState } from "react";
import PageHeader from "../../Component/PageHeader";
import registrationImg from "../../assets/image/registration-illustration2.png";
import googleIcon from "../../assets/image/google_icon.png";
import { TiTick } from "react-icons/ti";
import { HiXMark } from "react-icons/hi2";
import { BiError } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import { BsEyeFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [url, setUrl] = useState("");
  const [validUrl, setValidUrl] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { createUser, updateUser, setUserProfile, signinWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // Google signin method
  const handleGoogleSignin = () => {
    signinWithGoogle()
      .then(() => {
        setUserProfile(false);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Create user method
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    if (email && password.length >= 6) {
      createUser(email, password)
        .then((res) => {
          const user = res.user;
          updateUser(user, { userName, photoUrl }).then(() => {
            setUserProfile(false);
          });
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
        });
      form.reset();
    } else {
      setError("Your password must have at least 6 character!!!");
    }
  };

  // Email field validation
  const handleEmailValidation = (event) => {
    if (event.target.value.length) {
      setEmail(event.target.value);
      if (/\S+@\S+\.\S+/.test(event.target.value)) {
        setValidEmail(event.target.value);
      } else {
        setValidEmail("");
      }
    } else {
      setEmail("");
    }
  };

  // Password field validation
  const handlePasswordValidation = (event) => {
    if (event.target.value.length > 0) {
      setPassword(event.target.value);
      if (event.target.value.length >= 6) {
        setValidPassword(event.target.value);
      } else {
        setValidPassword("");
      }
    } else {
      setPassword("");
    }
  };

  // URL Field validation
  const handleUrlValidation = (event) => {
    if (event.target.value.length) {
      setUrl(event.target.value);
      if (/(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i.test(event.target.value)) {
        setValidUrl(event.target.value);
      } else {
        setValidUrl("");
      }
    } else {
      setUrl("");
    }
  };

  return (
    <div>
      <PageHeader headerTitle="Signup" />
      <div className="flex flex-col lg:flex-row items-center justify-between w-10/12 mx-auto py-24 gap-20">
        <div className="w-full lg:w-1/2">
          <img src={registrationImg} alt="" />
        </div>
        <div className="w-full lg:w-1/2 border p-8 md:p-10 lg:p-14 text-center space-y-7 rounded-lg">
          <h2 className="text-3xl font-semibold text-orange-500 text-center mb-12">
            Create an Account
          </h2>
          {error && (
            <div className="text-xl text-red-600 bg-red-50 border border-red-200 flex items-center justify-between shadow p-6 rounded-lg">
              <div className="flex items-center justify-center gap-2">
                <BiError className="w-14 h-14 md:w-6 md:h-6 lg:w-6 lg:h-6" />
                <span>{error}</span>
              </div>
              <HiOutlineXMark
                onClick={() => setError("")}
                className="w-14 h-14 md:w-6 md:h-6 lg:w-6 lg:h-6 cursor-pointer"
              />
            </div>
          )}
          <form onSubmit={handleCreateUser} className="flex flex-col gap-5">
            <div className="input-box relative w-full">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className={`w-full px-4 py-4 border border-gray-300 focus:border-[#587bf1] outline-none rounded-xl text-lg duration-500 ${
                  name && "input-focus"
                }`}
                type="text"
                name="userName"
              />
              <span
                className={`translate-y-1 absolute left-0 ml-1 px-4 py-3 text-lg pointer-events-none duration-500 text-gray-500 ${
                  name ? "bg-[#587bf1] input-valid" : "bg-white"
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
                onChange={handleEmailValidation}
                className={`w-full px-4 py-4 border border-gray-300 focus:border-[#587bf1] outline-none rounded-xl text-lg duration-500 ${
                  email && "input-focus"
                }`}
                type="email"
                name="email"
              />
              <span
                className={`translate-y-1 absolute left-0 ml-1 px-4 py-3 text-lg pointer-events-none duration-500 text-gray-500 ${
                  email && "input-valid"
                } ${validEmail ? "bg-[#587bf1]" : "bg-white"}`}
              >
                {email ? (
                  validEmail ? (
                    <div className="flex items-center gap-1">
                      <span>Email </span>
                      <TiTick />
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <span className="text-red-500">Email </span>
                      <HiXMark className="text-red-500" />
                    </div>
                  )
                ) : (
                  "Type your email"
                )}
              </span>
            </div>
            <div className="input-box relative w-full">
              <input
                onChange={handlePasswordValidation}
                className={`w-full px-4 py-4 border border-gray-300 focus:border-[#587bf1] outline-none rounded-xl text-lg duration-500 ${
                  password && "input-focus"
                }`}
                type={showPassword ? "text" : "password"}
                name="password"
              />
              <BsEyeFill
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute top-1/4 right-4 cursor-pointer w-6 h-6 ${
                  showPassword ? "text-gray-800" : "text-gray-400"
                }`}
                title={showPassword ? "Hide Password" : "Show Password"}
              />
              <span
                className={`translate-y-1 absolute left-0 ml-1 px-4 py-3 text-lg pointer-events-none duration-500 text-gray-500 ${
                  password && "input-valid"
                } ${validPassword ? "bg-[#587bf1]" : "bg-white"}`}
              >
                {password ? (
                  validPassword ? (
                    <div className="flex items-center gap-1">
                      <span>Password </span>
                      <TiTick />
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <span className="text-red-500">Password </span>
                      <HiXMark className="text-red-500" />
                    </div>
                  )
                ) : (
                  "Set a password"
                )}
              </span>
            </div>
            <div className="input-box relative w-full">
              <input
                onChange={handleUrlValidation}
                className={`w-full px-4 py-4 border border-gray-300 focus:border-[#587bf1] outline-none rounded-xl text-lg duration-500 ${
                  url && "input-focus"
                }`}
                type="url"
                name="photoUrl"
              />
              <span
                className={`translate-y-1 absolute left-0 ml-1 px-4 py-3 text-lg pointer-events-none duration-500 text-gray-500 ${
                  url && "input-valid"
                } ${validUrl ? "bg-[#587bf1]" : "bg-white"}`}
              >
                {url ? (
                  validUrl ? (
                    <div className="flex items-center gap-1">
                      <span>Photo URL </span>
                      <TiTick />
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <span className="text-red-500">Photo URL </span>
                      <HiXMark className="text-red-500" />
                    </div>
                  )
                ) : (
                  "Paste your photo URL"
                )}
              </span>
            </div>
            <div className="w-full">
              <input
                className="w-full bg-[#587bf1] duration-200 hover:bg-blue-600 py-3 cursor-pointer rounded-xl text-white font-semibold text-xl"
                value="Signup"
                type="submit"
              />
            </div>
          </form>
          <p>
            Already have an account? Please{" "}
            <Link className="text-orange-600 hover:underline" to="/login">
              login
            </Link>
          </p>
          <div className="text-center">
            <h1 className="mx-auto text-center relative before:content-[''] before:h-[1px] before:w-1/2 before:bg-gray-300 before:absolute before:top-1/2 before:right-0 before:-z-10 after:content-[''] after:h-[1px] after:w-1/2 after:bg-gray-300 after:absolute after:top-1/2 after:left-0 after:-z-10">
              <span className="bg-white px-2 text-xl">or</span>
            </h1>
          </div>
          <button
            onClick={handleGoogleSignin}
            className="w-full py-3 border rounded-xl font-semibold flex items-center justify-center gap-4"
          >
            <img className="w-6 h-6" src={googleIcon} alt="" />
            <span>Signup with google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
