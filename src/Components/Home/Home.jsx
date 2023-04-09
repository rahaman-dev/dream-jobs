import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Home.css";
import Catagory from "../Catagory/Catagory";
import CatagoryCart from "../CatagoryCart/CatagoryCart";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  const catagory = useLoaderData();
  return (
    <>
      <div className="flex">
        <div className="left">
          <h2 className="titleHome">
            One Step Closer To Your
            <span style={{ color: "IndianRed" }}> Dream Job </span>
          </h2>
          <p style={{ fontSize: "20px", margin: "20px 0" }}>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div className="right">
          {/* <img src="https://picsum.photos/500/500" alt="" /> */}
          <img
            src="sonod.jpg"
            alt=""
            style={{ width: " 500px", height: "500px" }}
          />
        </div>
      </div>
      <div style={{ margin: "50px 0" }}>
        <h1 style={{ textAlign: "center", fontSize: "50px" }}>
          Job Category List
        </h1>
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div style={{ display: "flex" }}>
        {catagory.map((cart, idx) => (
          <CatagoryCart key={idx} cart={cart}></CatagoryCart>
        ))}
      </div>
      <FeaturedJobs></FeaturedJobs>
    </>
  );
};

export default Home;
