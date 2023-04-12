import React, { useState } from "react";
import "./Mane.css";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // menu icon
  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   fill="none"
  //   viewBox="0 0 24 24"
  //   strokeWidth={1.5}
  //   stroke="currentColor"
  //   className="w-6 h-6"
  // >
  //   <path
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //     d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  //   />
  // </svg>;

  // close iocn
  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   fill="none"
  //   viewBox="0 0 24 24"
  //   strokeWidth={1.5}
  //   stroke="currentColor"
  //   className="w-6 h-6"
  // >
  //   <path
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //     d="M6 18L18 6M6 6l12 12"
  //   />
  // </svg>;

  return (
    <nav className="menu">
      <div className="menu__logo">
        <Link to="/">
          <h2>Dream Jobs</h2>
        </Link>
      </div>
      {/* <button className="menu__toggle" onClick={toggleMenu}>
        {isOpen ? "X" : "menu"}
      </button> */}
      <button className="menu__toggle" onClick={toggleMenu}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          "menu"
        )}
      </button>

      <div className="">
        <ul className={`menu__list ${isOpen ? "menu__list--open" : ""}`}>
          <li className="menu__item">
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li className="menu__item">
            <ActiveLink to="statisics">Statistics</ActiveLink>
          </li>
          <li className="menu__item">
            {" "}
            <ActiveLink to="appliedjobs">Applied Jobs</ActiveLink>
          </li>
          <li className="menu__item">
            {" "}
            <ActiveLink to="blog">Blog</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="btn">
        <button>Star Applying</button>
      </div>
    </nav>
  );
};

export default Menu;
