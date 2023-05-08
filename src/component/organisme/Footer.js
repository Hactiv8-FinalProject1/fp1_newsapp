import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";

const Footer = () => {
  const location = useLocation().pathname;

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <footer className="bg-dark pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full px-4 font-medium text-slate-500 md:w-1/3">
            <img src={logo} alt="" className="w-28 mb-4 brightness-150 hover:animate-pulse" />
            <h3 className="mb-2 text-2xl text-slate-900 font-bold">RCTN-KS07</h3>
            <p>Dani Rizky Zaelany - 020</p>
            <p>Laili Cahyani - 007</p>
            <p>Dika Rahman Rifai - 018</p>
          </div>
          <div className="mb-12 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-slate-900">Resource</h3>
            <ul className="text-slate-500">
              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener" className="mb-3 inline-block text-base hover:text-primary">
                  ReactJS
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener" className="mb-3 inline-block text-base hover:text-primary">
                  TailwindCSS
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-12 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-slate-900">Navigation</h3>
            <ul className="text-slate-500">
              <li>
                {location === "/" ? (
                  <a href="#home" className="mb-3 inline-block text-base hover:text-primary">
                    Home
                  </a>
                ) : (
                  <Link to="/" onClick={topFunction} className="mb-3 inline-block text-base hover:text-primary">
                    Home
                  </Link>
                )}
              </li>
              <li>
                <Link to="/indonesia" onClick={topFunction} className="mb-3 inline-block text-base hover:text-primary">
                  Indonesia
                </Link>
              </li>
              <li>
                <Link to="/programming" onClick={topFunction} className="mb-3 inline-block text-base hover:text-primary">
                  Programming
                </Link>
              </li>
              <li>
                <Link to="/covid-19" onClick={topFunction} className="mb-3 inline-block text-base hover:text-primary">
                  Covid-19
                </Link>
              </li>
              <li>
                <Link to="/saved" onClick={topFunction} className="mb-3 inline-block text-base hover:text-primary">
                  Saved
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-slate-700 pt-10">
          <p className="text-center text-xs font-medium text-slate-500">
            Dibuat dengan <span className="text-pink-500">❤️</span> oleh RCTN-KS07-KEL03
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
