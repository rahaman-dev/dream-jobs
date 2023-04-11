import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";
import "./FeaturedJobs.css";
import JobDel from "../JobDel/JobDel";

const FeaturedJobs = ({ handleViewDetailsBtn }) => {
  const [jobs, setJobs] = useState([]);
  const [slices, setSlices] = useState(false);
  useEffect(() => {
    fetch("/job.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleSeeMoreBtn = () => {
    console.log("clicked");
    <div>
      {jobs.slice(4, 15).map((job, idx) => (
        <Job key={idx} job={job}></Job>
      ))}
    </div>;
    setSlices(true);
  };

  return (
    <div style={{ margin: "50px 0" }}>
      <h2 style={{ textAlign: "center", fontSize: "40px" }}>Featured Jobs</h2>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="gird">
        {jobs.slice(0, 4).map((job, idx) => (
          <Job
            key={idx}
            job={job}
            handleViewDetailsBtn={handleViewDetailsBtn}
          ></Job>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => handleSeeMoreBtn(jobs)} className="btn center">
          See More
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
