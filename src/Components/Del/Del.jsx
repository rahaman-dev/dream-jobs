import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Del.css";

const Del = ({ del }) => {
  const [details, setDetails] = useState([]);
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

  const applyNow = (del) => {
    let updatedDetails = [];
    let priviusDetails = JSON.parse(localStorage.getItem("details"));

    if (priviusDetails) {
      updatedDetails = [...priviusDetails, del];
      localStorage.setItem("details", JSON.stringify(updatedDetails));
      setDetails(updatedDetails);
      toast("Wow fine! & go to Applied Jobs page");
    } else {
      updatedDetails = [del];
      localStorage.setItem("details", JSON.stringify(updatedDetails));
      setDetails(updatedDetails);
      toast("Wow fine! & go to Applied Jobs page");
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center", margin: "30px" }}>
        <img src={companyLogo} alt="" />
      </div>
      <div className="delContainer">
        <div className="fontWidthAfterConteiner">
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
        <div className="rightContiner">
          <b>
            <p>Job Details</p>
          </b>
          <p style={{ display: "flex", alignItems: "center" }}>
            <b>Salary:</b>
            <span style={{ marginTop: "10px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: "25px", margin: "0 5px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            {salary}
          </p>
          <p>
            <b>Job Details: </b> {jobTitle}
          </p>
          <h5>Contact Information</h5>
          <p>
            <b>Phone :</b> {phone}
          </p>
          <p>
            <b>Email :</b> {email}
          </p>
          <p>
            <b>Address :</b>{" "}
            <span style={{ marginTop: "10px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=""
                style={{ width: "25px", margin: "0 5px", marginTop: "25px" }}
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
            </span>{" "}
            {address}
          </p>
          <p>
            <b>ID :</b> {_id}
          </p>
          <button onClick={() => applyNow(del)} className="btn">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Del;
