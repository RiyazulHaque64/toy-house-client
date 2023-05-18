import { NavLink } from "react-router-dom";
import logo from "../assets/image/toyhouse logo.png";

const Header = () => {
  return (
    <div className="w-10/12 mx-auto flex items-center justify-between py-4">
      {/* logo */}
      <div>
        <img className="w-auto h-20" src={logo} alt="" />
      </div>
      {/* navbar */}
      <nav>
        <ul className="flex gap-5">
          <li className="text-lg font-semibold duration-200 hover:text-blue-700 text-blue-500">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-lg font-semibold duration-200 hover:text-blue-700 text-blue-500">
            <NavLink to="/allToys">All Toys</NavLink>
          </li>
          <li className="text-lg font-semibold duration-200 hover:text-blue-700 text-blue-500">
            <NavLink to="/myToys">My Toys</NavLink>
          </li>
          <li className="text-lg font-semibold duration-200 hover:text-blue-700 text-blue-500">
            <NavLink to="/addToy">Add Toy</NavLink>
          </li>
          <li className="text-lg font-semibold duration-200 hover:text-blue-700 text-blue-500">
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className="text-lg font-semibold duration-200 hover:text-blue-700 text-blue-500">
            <NavLink to="/signup">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
