import React from "react";
import { Link } from "react-router-dom";
import "./Heaser.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <h2>Jobs</h2>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="statisics">Statistics</Link>
          <Link to="appliedjobs">Applied Jobs</Link>
          <Link to="blog">Blog</Link>
        </div>
        <div className="btn">
          <button>Star Applying</button>
        </div>
      </div>
    </>
  );
};

export default Header;
