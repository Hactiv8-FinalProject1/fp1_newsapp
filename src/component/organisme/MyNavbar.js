import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/icons/logo.svg";

const MyNavbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");

  const searchChange = (e) => {
    setSearchInput(e.target.value.replace(" ", "-"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${searchInput}`);
  };

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
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ">
      <div className="container px-10 xl:px-20">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            {location === "/" ? (
              <a href="/" className="font-bold text-lg text-sky-600 block py-6 lg:py-3">
                <img src={logo} alt="" className="w-16" />
              </a>
            ) : (
              <Link to="/" onClick={topFunction} className="font-bold text-lg text-sky-600 block py-6 lg:py-3">
                <img src={logo} alt="" className="w-16" />
              </Link>
            )}
          </div>
          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" onClick={hamburgerCLick} className="block absolute right-4 lg:hidden">
              <span className="hamburger-line origin-top-left transition duration-300"></span>
              <span className="hamburger-line transition duration-300"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300"></span>
            </button>

            <nav id="nav-menu" className="hidden absolute py-5 lg:py-2 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
              <div className="block lg:flex lg:items-center">
                <ul className="block lg:flex">
                  <li className="group">
                    <NavLink
                      to="/"
                      onClick={topFunction}
                      className={({ isActive }) => (isActive ? "text-base  text-sky-600 py-2 mx-6 flex font-bold group-hover:text-primary" : "text-base  text-sky-600 py-2 mx-6 flex group-hover:text-primary ")}
                    >
                      Indonesia
                    </NavLink>
                  </li>
                  <li className="group">
                    <NavLink
                      to="/programming"
                      onClick={topFunction}
                      className={({ isActive }) => (isActive ? "text-base  text-sky-600 py-2 mx-6 flex font-bold group-hover:text-primary" : "text-base  text-sky-600 py-2 mx-6 flex group-hover:text-primary ")}
                    >
                      Programming
                    </NavLink>
                  </li>
                  <li className="group">
                    <NavLink
                      to="/covid19"
                      onClick={topFunction}
                      className={({ isActive }) => (isActive ? "text-base  text-sky-600 py-2 mx-6 flex font-bold group-hover:text-primary" : "text-base  text-sky-600 py-2 mx-6 flex group-hover:text-primary")}
                    >
                      Covid-19
                    </NavLink>
                  </li>
                  <li className="group">
                    <NavLink
                      to="/saved"
                      onClick={topFunction}
                      className={({ isActive }) => (isActive ? "text-base  text-sky-600 py-2 mx-6 flex font-bold group-hover:text-primary" : "text-base  text-sky-600 py-2 mx-6 flex group-hover:text-primary")}
                    >
                      Saved
                    </NavLink>
                  </li>
                </ul>
                <form onSubmit={handleSubmit} className="mx-6 flex">
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="text" onChange={searchChange} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                  </div>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyNavbar;
