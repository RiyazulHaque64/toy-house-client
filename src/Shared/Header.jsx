import { NavLink } from "react-router-dom";
import logo from "../assets/image/toyhouse logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FiLogOut } from "react-icons/fi";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
    setOpenMenu(false);
  };
  return (
    <div>
      <div className="w-10/12 mx-auto flex items-center justify-between py-4">
        {/* logo */}
        <div>
          <img className="w-auto h-10 md:h-16 lg:h-20" src={logo} alt="" />
        </div>
        {/* navbar */}
        <nav className="hidden md:block">
          <ul className="flex items-center">
            <li className="text-lg font-semibold duration-200 hover:text-orange-500 text-gray-600 px-4">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-lg font-semibold duration-200 hover:text-orange-500 text-gray-600 border-l px-4">
              <NavLink to="/allToys">All Toys</NavLink>
            </li>
            <li className="text-lg font-semibold duration-200 hover:text-orange-500 text-gray-600 border-l px-4">
              <NavLink to="myToys">My Toys</NavLink>
            </li>
            <li className="text-lg font-semibold duration-200 hover:text-orange-500 text-gray-600 border-l px-4">
              <NavLink to="/addToy">Add Toy</NavLink>
            </li>

            <li className="text-lg font-semibold duration-200 hover:text-orange-500 text-gray-600 border-l px-4">
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </nav>
        <ul className="flex gap-4 items-center">
          {user ? (
            <>
              <li className="hidden md:block">
                <img
                  title={user?.displayName}
                  className="w-10 rounded-full"
                  src={user?.photoURL}
                  alt="Profile Picture"
                />
              </li>
              <li
                onClick={handleLogout}
                title="Logout"
                className="text-orange-500 hover:text-orange-600 font-semibold text-lg duration-200 transition-colors cursor-pointer hidden md:block"
              >
                <FiLogOut />
              </li>
            </>
          ) : (
            <NavLink to="/login" className="hidden md:block">
              <li className="font-semibold duration-200 bg-orange-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-600">
                Login
              </li>
            </NavLink>
          )}
          {openMenu ? (
            <li className="md:hidden" onClick={() => setOpenMenu(false)}>
              <HiXMark className="w-6 h-6" />
            </li>
          ) : (
            <li className="md:hidden" onClick={() => setOpenMenu(true)}>
              <HiBars3BottomRight className="w-6 h-6" />
            </li>
          )}
        </ul>
      </div>
      {/* Mobile menu */}
      <nav
        className={`md:hidden duration-500 absolute top-16 mt-1 bg-white z-50 w-48 h-screen ${
          openMenu ? "right-0" : "-right-96"
        } py-6`}
      >
        <ul className="flex flex-col gap-4 items-center">
          {user && (
            <li>
              <img
                title={user?.displayName}
                className="w-20 rounded-full"
                src={user?.photoURL}
                alt="Profile Picture"
              />
              <span className="text-sm font-semibold">{user?.displayName}</span>
            </li>
          )}
          <li
            onClick={() => setOpenMenu(false)}
            className="text-lg font-semibold duration-200 hover:text-orange-500 text-gray-600 px-4"
          >
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            onClick={() => setOpenMenu(false)}
            className="text-lg font-semibold duration-200 hover:text-orange-500 text-gray-600 px-4"
          >
            <NavLink to="/allToys">All Toys</NavLink>
          </li>
          <li
            onClick={() => setOpenMenu(false)}
            className="text-lg font-semibold duration-200 hover:text-orange-500 text-gray-600 px-4"
          >
            <NavLink to="myToys">My Toys</NavLink>
          </li>
          <li
            onClick={() => setOpenMenu(false)}
            className="text-lg font-semibold duration-200 hover:text-orange-500 text-gray-600 px-4"
          >
            <NavLink to="/addToy">Add Toy</NavLink>
          </li>
          <li
            onClick={() => setOpenMenu(false)}
            className="text-lg font-semibold duration-200 hover:text-orange-500 text-gray-600 px-4"
          >
            <NavLink to="/blog">Blog</NavLink>
          </li>

          {user ? (
            <li
              onClick={handleLogout}
              title="Logout"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-2 text-white rounded font-semibold text-lg duration-200 transition-colors cursor-pointer"
            >
              Logout
            </li>
          ) : (
            <NavLink to="/login">
              <li
                onClick={() => setOpenMenu(false)}
                className="bg-orange-500 hover:bg-orange-600 px-6 py-2 text-white rounded font-semibold text-lg duration-200 transition-colors cursor-pointer"
              >
                Login
              </li>
            </NavLink>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
