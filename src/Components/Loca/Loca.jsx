import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./Loca.css";

const Loca = ({ loca }) => {
  const {
    salary,
    companyLogo,
    companyName,
    address,
    jobTitle,
    _id,
    phone,
    email,
    jobDetails,
    jobDescription,
    jobResponsibilities,
    educationRequirements,
    jobExperiences,
    jobTime,
  } = loca;

  // let message;
  // if (cart.length === 0) {
  //   message = <h2>please add a product</h2>;
  // }

  return (
    <>
      <div className="locacalContainer">
        <div className="locacalContainerTow">
          <div>
            <img src={companyLogo} alt="" className="logoLocal" />
          </div>
          <div style={{ lineHeight: "30px" }}>
            <h1>{jobTitle}</h1>
            <p>{companyName}</p>
            <span>{address}</span>
            <span>{salary}</span>
          </div>
        </div>
        <div>
          <p
            style={{
              width: "100px",
              backgroundColor: "yellow",
              padding: "8px",
              borderRadius: "10px",
            }}
          >
            <Link to={`/job/${_id}`} style={{ textDecoration: "none" }}>
              View Details
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Loca;
