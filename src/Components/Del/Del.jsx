import React from "react";

const Del = ({ del }) => {
  const {
    salary,
    companyLogo,
    companyName,
    phone,
    email,
    address,
    jobTitle,
    jobDescription,
    jobResponsibilities,
    educationRequirements,
    jobExperiences,
    jobTime,
    _id,
  } = del;
  return (
    <div>
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
          <p>Job Details</p>
          <p>Salary: {salary}</p>
          <p>Job Title {jobTitle}</p>
          <h5>Contact Information</h5>
          <p>Phone : {phone}</p>
          <p>Email : {email}</p>
          <p>Address : {address}</p>
          <p>Address : {_id}</p>
          <button className="btn">Apply The job</button>
        </div>
      </div>
    </div>
  );
};

export default Del;
