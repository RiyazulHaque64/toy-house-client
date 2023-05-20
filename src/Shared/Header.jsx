import { NavLink } from "react-router-dom";
import logo from "../assets/image/toyhouse logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
    // setIsMenuOpen(false);
  };
  return (
    <div className="w-10/12 mx-auto flex items-center justify-between py-4">
      {/* logo */}
      <div>
        <img className="w-auto h-20" src={logo} alt="" />
      </div>
      {/* navbar */}
      <nav>
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
            <li>
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
              className="text-orange-500 hover:text-orange-600 font-semibold text-lg duration-200 transition-colors cursor-pointer"
            >
              <FiLogOut />
            </li>
          </>
        ) : (
          <NavLink to="/login">
            <li className="font-semibold duration-200 bg-orange-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-orange-600">
              Login
            </li>
          </NavLink>
        )}
      </ul>
    </div>
  );
};

export default Header;
