import React, { useState } from "react";

const Del = ({ del }) => {
  const [details, setDetails] = useState([]);
  const {
    salary,
    companyLogo,
    companyName,
    phone,
    email,
    address,
    jobDetails,
    jobDescription,
    jobResponsibilities,
    educationRequirements,
    jobExperiences,
    jobTime,
    _id,
  } = del;

  const applyNow = (del) => {
    let updatedDetails = [];
    let priviusDetails = JSON.parse(localStorage.getItem("details"));

    if (priviusDetails) {
      updatedDetails = [...priviusDetails, del];
      localStorage.setItem("details", JSON.stringify(updatedDetails));
      setDetails(updatedDetails);
    } else {
      updatedDetails = [del];
      localStorage.setItem("details", JSON.stringify(updatedDetails));
      setDetails(updatedDetails);
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center", margin: "30px" }}>
        <img src={companyLogo} alt="" />
      </div>
      <div style={{ display: "flex", margin: "70px" }}>
        <div
          style={{
            width: "700px",
            padding: "10px",
            fontSize: "20px",
            lineHeight: "35px",
            borderRadius: "10px",
          }}
        >
          <p>
            <b>Job Description:</b> {jobDescription}
          </p>
          <p>
            <b> Job Responsibility:</b> {jobResponsibilities}
          </p>
          <h5>Educational Requirements:</h5>
          <p>{educationRequirements}</p>
          <h5>Experiences</h5>
          <p>{jobExperiences}</p>
        </div>
        <div
          style={{
            backgroundColor: "#7E90FE",
            padding: "10px",
            fontSize: "22px",
            lineHeight: "45px",
            borderRadius: "10px",
          }}
        >
          <b>
            {" "}
            <p>Job Details</p>
          </b>
          <p>
            <b>Salary:</b> {salary}
          </p>
          <p>
            <b>Job Details: </b> {jobDetails}
          </p>
          <h5>Contact Information</h5>
          <p>
            <b>Phone :</b> {phone}
          </p>
          <p>
            <b>Email :</b> {email}
          </p>
          <p>
            <b>Address :</b> {address}
          </p>
          <p>
            <b>Address :</b> {_id}
          </p>
          <button onClick={() => applyNow(del)} className="btn">
            Apply The job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Del;
