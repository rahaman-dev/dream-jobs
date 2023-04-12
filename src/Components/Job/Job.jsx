import React from "react";
import "./job.css";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    salary,
    companyLogo,
    companyName,
    address,
    jobTitle,
    poistion1,
    poistion2,
  } = job;
  return (
    <div className="containerJob">
      <img src={companyLogo} alt="" width={"200px"} height={"70px"} />
      <h2>{jobTitle}</h2>
      <h4 style={{ marginBottom: "20px" }}>{companyName}</h4>
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
      <div className="flexJob">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginTop: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=""
              style={{ width: "20px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </span>
          {address}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginTop: "10px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={{ width: "20px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          {salary}
        </div>
      </div>
      <p
        style={{
          width: "100px",
          backgroundColor: "rgb(218, 218, 218)",
          padding: "8px",
          borderRadius: "10px",
        }}
      >
        <Link
          to={`/job/${job._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          View Details
        </Link>
      </p>
    </div>
  );
};

export default Job;
