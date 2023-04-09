import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("job.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div style={{ margin: "50px 0" }}>
      <h2 style={{ textAlign: "center", fontSize: "40px" }}>Featured Jobs</h2>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="gird">
        {jobs.map((job, idx) => (
          <Job key={idx} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
