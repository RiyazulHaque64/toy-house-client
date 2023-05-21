import { Link } from "react-router-dom";
import logo from "../assets/image/toyhouse logo.png";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer p-10 bg-blue-50 text-base-content">
        <div
          className="mx-auto"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img className="w-48" src={logo} alt="" />
          <span className="text-2xl font-semibold">toyHouse Ltd.</span>
          <p>
            69-71, New Elephant Road <br />
            Dhaka - 1205
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <span className="footer-title">Services</span>
          <a className="link link-hover">Toys Import</a>
          <a className="link link-hover">Toys Distribute</a>
          <a className="link link-hover">Toys Sales</a>
          <a className="link link-hover">Toys Retailing</a>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <span className="footer-title">Valuable Links</span>
          <Link className="link link-hover" to="/">
            Home
          </Link>
          <Link className="link link-hover" to="/allToys">
            All Toys
          </Link>
          <Link className="link link-hover" to="/blog">
            Blog
          </Link>
          <Link className="link link-hover" to="/login">
            Login
          </Link>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="bg-blue-100 p-4 text-center">
        <p className="text-sm lg:text-base font-semibold">
          Copyrights &copy; 2023 Chef&apos;s Kitchen All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
