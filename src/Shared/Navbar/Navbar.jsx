import { Link, NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import MenuBar from "./MenuBar";
import { RxCross1 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import logo from '../../assets/Logo/logo.jpg'
import companyProfile from "../../assets/companyProfile.pdf"


const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth <= 768 ? open : false);
    };

    window.addEventListener("resize", handleResize);
   
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]); 
  return (
    <div className="bg-bg_primary">
      <div className="navbar max-w-7xl mx-auto px-0 py-4">
        <div className="navbar-start flex justify-between w-full lg:justify-start lg:w-2/12 ml-2 lg:ml-0">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="">
              {open ? (
                <>
                  <RxCross1
                    onClick={() => setOpen(!open)}
                    className="text-2xl"
                  />
                </>
              ) : (
                <MdMenu onClick={() => setOpen(!open)} className="text-2xl" />
              )}
            </div>
            
          </div>
          <Link to="/" className=" text-text_xxl font-bold text-text_secondary px-2 md:px-0">
            <img src={logo} className="w-28" alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex lg:flex-1 ">
          <ul className="flex items-center justify-end gap-gap_primary px-0 w-full">
            <li>
              <Link to='/' className="text-text_secondary font-semibold text-text_md">
                Home
              </Link>
            </li>
            <li className="relative group ">
              <p className="text-text_secondary mb-0 font-semibold text-text_md flex items-center">
                About Us{" "}
                <span>
                  <MdKeyboardArrowDown className="text-text_secondary text-text_lg" />
                </span>
              </p>
              <div className="absolute bg-bg_primary shadow-md rounded-sm overflow-hidden pt-2 w-48 z-10 group-hover:scale-100 transition-transform duration-300 transform origin-top-left scale-0">
                <Link
                  to="/gallery"
                  className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
                >
                  Gallery
                </Link>
                <Link
                  to="/videos"
                  className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
                >
                  Videos
                </Link>
                <Link
                  to="/events"
                  className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
                >
                  Event
                </Link>
                <Link
                  to="/careers"
                  className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
                >
                  Career
                </Link>
                <a
                  href={companyProfile}                  
                  className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
                >
                  Company Profile
                </a>
              </div>
            </li>
            <li className="relative group">
              <p className="text-text_secondary mb-0 font-semibold text-text_md flex items-center">
                Courses{" "}
                <span>
                  <MdKeyboardArrowDown className="text-text_secondary text-text_lg" />
                </span>
              </p>
              <div className="absolute bg-bg_primary shadow-md rounded-sm overflow-hidden pt-2 w-48 z-10 group-hover:scale-100 transition-transform duration-300 transform origin-top-left scale-0">
                <Link
                  to="/"
                  className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
                >
                  Link 1
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
                >
                  Link 2
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
                >
                  Link 3
                </Link>
              </div>
            </li>
            <li className="relative group">
              <p className="text-text_secondary mb-0 font-semibold text-text_md flex items-center">
                Industrial Course{" "}
                <span>
                  <MdKeyboardArrowDown className="text-text_secondary text-text_lg" />
                </span>
              </p>
              <div className="absolute bg-bg_primary shadow-md rounded-sm overflow-hidden pt-2 w-48 z-10 group-hover:scale-100 transition-transform duration-300 transform origin-top-left scale-0">
                <Link
                  to="/"
                  className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
                >
                  Link 1
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
                >
                  Link 2
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
                >
                  Link 3
                </Link>
              </div>
            </li>
            <li className="relative group">
              <p className="text-text_secondary mb-0 font-semibold text-text_md flex items-center">
                Industrial Solution{" "}
                <span>
                  <MdKeyboardArrowDown className="text-text_secondary text-text_lg" />
                </span>
              </p>
              <div className="absolute bg-bg_primary shadow-md rounded-sm overflow-hidden pt-2 w-48 z-10 group-hover:scale-100 transition-transform duration-300 transform origin-top-left scale-0">
                <Link
                  to="/"
                  className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
                >
                  Link 1
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
                >
                  Link 2
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-text_gray hover:bg-text_secondary hover:text-white"
                >
                  Link 3
                </Link>
              </div>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-text_secondary font-semibold text-text_md"
              >
                Contact
              </Link>
            </li>
            <li className="w-[100px]">
              <NavLink
                to="/hotCourse"
                className={`text-text_secondary font-semibold text-text_md hover:text-color_blue duration-300`}
              >
                Hot Course
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`lg:hidden fixed top-48 ${
          open ? "left-0" : "-left-[100%]"
        } duration-300 z-30 w-full md:3/5`}
      >
        <MenuBar></MenuBar>
      </div>
    </div>
  );
};

export default Navbar;
