import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Home.css";
import Catagory from "../Catagory/Catagory";
import CatagoryCart from "../CatagoryCart/CatagoryCart";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  const catagory = useLoaderData();

  const handleViewDetailsBtn = (_id) => {
    // console.log(_id);
  };

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
          <img src="sonod.jpg" alt="" className="imagesHome" />
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
      <div className="catagoryFlex">
        {catagory &&
          catagory.map((cart, idx) => (
            <CatagoryCart key={idx} cart={cart}></CatagoryCart>
          ))}
      </div>
      <FeaturedJobs handleViewDetailsBtn={handleViewDetailsBtn}></FeaturedJobs>
    </>
  );
};

export default Home;
