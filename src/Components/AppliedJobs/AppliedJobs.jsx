import React, { useEffect, useState } from "react";
import Loca from "../Loca/Loca";
import "./AppliedJob.css";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState(() => {
    const storedJobs = JSON.parse(localStorage.getItem("details")) || [];
    return storedJobs;
  });
  const [local, setLocal] = useState(jobs);

  useEffect(() => {
    let getJobFromLocalStorage = JSON.parse(localStorage.getItem("details"));
    if (getJobFromLocalStorage) {
      setJobs(getJobFromLocalStorage);
    }
  }, []);

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    if (selectedType === "all") {
      setLocal(jobs);
    } else {
      const filteredJobs = jobs.filter((job) => job.poistion1 === selectedType);
      setLocal(filteredJobs);
    }
  };

  return (
    <div>
      {/* <img src="banner.jpg" alt="" width={"100%"} height={"200px"} className="imagOverly" /> */}
      <div className="imagOverly"></div>

      <div className="textRightPadding">
        <select onChange={handleTypeChange} defaultValue="all">
          <option value="all">All Jobs</option>
          <option value="remote">Remote Jobs</option>
          <option value="onSite">OnSite Jobs</option>
        </select>
      </div>
      {local && local.map((loca, idx) => <Loca key={idx} loca={loca}></Loca>)}
    </div>
  );
};

export default AppliedJobs;
