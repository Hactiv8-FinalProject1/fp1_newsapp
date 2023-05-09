import React from "react";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "../../assets/icons/logo.svg";
import SearchInput from "./SearchInput";

const MyNavbar = () => {
  const location = useLocation().pathname;

  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    // Navbar Fixed
    window.onscroll = function () {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;
      const toTop = document.querySelector("#to-top");

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
      } else {
        header.classList.remove("navbar-fixed");
        toTop.classList.remove("flex");
        toTop.classList.add("hidden");
      }
    };

    if (hamburger) {
      window.addEventListener("click", function (e) {
        if (e.target !== hamburger && e.target !== navMenu) {
          hamburger.classList.remove("hamburger-active");
          navMenu.classList.add("hidden");
        }
      });
    }
  });

  const hamburgerCLick = () => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");
    // Hamburger
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };

  return (
    <header className="bg-white drop-shadow-md sticky top-0 left-0 w-full flex items-center z-10 mb-10">
      <div className="container px-10 xl:px-20">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            {location === "/" ? (
              <a
                href="/"
                className="font-bold text-lg text-sky-600 block py-6 lg:py-3"
              >
                <img src={logo} alt="" className="w-16" />
              </a>
            ) : (
              <Link
                to="/"
                onClick={topFunction}
                className="font-bold text-lg text-sky-600 block py-6 lg:py-3"
              >
                <img src={logo} alt="" className="w-16" />
              </Link>
            )}
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              onClick={hamburgerCLick}
              className="block absolute right-4 lg:hidden"
            >
              <span className="hamburger-line origin-top-left transition duration-300"></span>
              <span className="hamburger-line transition duration-300"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300"></span>
            </button>

            <nav
              id="nav-menu"
              className="hidden absolute py-5 lg:py-2 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <div className="block lg:flex lg:items-center">
                <ul className="block lg:flex">
                  <li className="group">
                    <NavLink
                      to="/"
                      onClick={topFunction}
                      className={({ isActive }) =>
                        isActive
                          ? "text-base  text-sky-600 py-2 mx-6 flex font-bold group-hover:text-primary"
                          : "text-base  text-sky-600 py-2 mx-6 flex group-hover:text-primary "
                      }
                    >
                      Indonesia
                    </NavLink>
                  </li>
                  <li className="group">
                    <NavLink
                      to="/programming"
                      onClick={topFunction}
                      className={({ isActive }) =>
                        isActive
                          ? "text-base  text-sky-600 py-2 mx-6 flex font-bold group-hover:text-primary"
                          : "text-base  text-sky-600 py-2 mx-6 flex group-hover:text-primary "
                      }
                    >
                      Programming
                    </NavLink>
                  </li>
                  <li className="group">
                    <NavLink
                      to="/covid19"
                      onClick={topFunction}
                      className={({ isActive }) =>
                        isActive
                          ? "text-base  text-sky-600 py-2 mx-6 flex font-bold group-hover:text-primary"
                          : "text-base  text-sky-600 py-2 mx-6 flex group-hover:text-primary"
                      }
                    >
                      Covid-19
                    </NavLink>
                  </li>
                  <li className="group">
                    <NavLink
                      to="/saved"
                      onClick={topFunction}
                      className={({ isActive }) =>
                        isActive
                          ? "text-base  text-sky-600 py-2 mx-6 flex font-bold group-hover:text-primary"
                          : "text-base  text-sky-600 py-2 mx-6 flex group-hover:text-primary"
                      }
                    >
                      Saved
                    </NavLink>
                  </li>
                </ul>
                <SearchInput />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyNavbar;