import React from "react";
import { Link } from "react-router-dom";
import "./Loca.css";

const Loca = ({ loca }) => {
  const {
    salary,
    companyLogo,
    companyName,
    address,
    jobTitle,
    _id,
    poistion1,
    poistion2,
  } = loca;

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

            <p style={{ margin: "10px 0" }}>
              <span
                style={{
                  fontSize: "20px",
                  marginRight: "5px",
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: "#d0d0d8",
                }}
              >
                {poistion1}
              </span>
              <span
                style={{
                  fontSize: "20px",
                  marginRight: "5px",
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: "#9b9bef",
                }}
              >
                {poistion2}
              </span>
            </p>

            <span>{address}</span>
            <span>{salary}</span>
          </div>
        </div>
        <div>
          <p
            style={{
              fontSize: "20px",
              backgroundColor: "#d0d0d8",
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
