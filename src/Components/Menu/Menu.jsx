import React, { useState } from "react";
import "./Mane.css";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu">
      <div className="menu__logo">
        <Link to="/">
          <h2>Dream Jobs</h2>
        </Link>
      </div>

      <button className="menu__toggle" onClick={toggleMenu}>
        {/* {isOpen ? "Close" : "Menu"} */}
        {isOpen ? "X" : "menu"}
      </button>
      <div className="">
        {/* style={{ display: "flex", listStyle: "none" }} */}
        <ul className={`menu__list ${isOpen ? "menu__list--open" : ""}`}>
          {/* <ActiveLink to="/">Home</ActiveLink> */}
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
