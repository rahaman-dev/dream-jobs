import React from "react";
import { Link } from "react-router-dom";
import "./Heaser.css";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            {" "}
            <h2>Dream Jobs</h2>
          </Link>
        </div>
        <div className="links">
          <ul style={{ display: "flex", listStyle: "none" }}>
            {/* <ActiveLink to="/">Home</ActiveLink> */}
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="statisics">Statistics</ActiveLink>
            </li>
            <li>
              {" "}
              <ActiveLink to="appliedjobs">Applied Jobs</ActiveLink>
            </li>
            <li>
              {" "}
              <ActiveLink to="blog">Blog</ActiveLink>
            </li>
          </ul>
        </div>
        <div className="btn">
          <button>Star Applying</button>
        </div>
      </div>
    </>
  );
};

export default Header;
