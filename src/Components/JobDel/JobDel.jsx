import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDel = () => {
  const dynamic = useParams();
  const [jobDel, setJobDel] = useState([]);
  useEffect(() => {
    fetch("/job.json")
      .then((res) => res.json())
      .then((data) => setJobDel(data));
  }, []);

  const job = jobDel.find((job) => job._id === dynamic._id);
  console.log(job);
  return (
    <div>
      <h2>job title</h2>
      <img src={job.companyLogo} alt="" />
      <h2>{job.address}</h2>
      <h2>{job.companyName}</h2>
      <h2>{job.educationRequirements}</h2>
      <h2>{job.email}</h2>
      <h2>{job.jobDescription}</h2>
    </div>
  );
};

export default JobDel;
