import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Del from "../Del/Del";

const JobDel = () => {
  const dynamic = useParams();
  const [jobDel, setJobDel] = useState([]);

  useEffect(() => {
    fetch("/job.json")
      .then((res) => res.json())
      .then((data) => setJobDel(data));
  }, []);

  // let del = jobDel && jobDel.find((job) => job._id === dynamic._id);
  let dels = jobDel && jobDel?.filter((job) => job._id === dynamic._id);
  // console.log(del);

  return (
    <>
      {dels.map((del, idx) => (
        <Del key={idx} del={del}></Del>
      ))}

      {/* <img src={del.companyLogo} alt="" />
      <h2>{del.address}</h2>
      <h2>{del.companyName}</h2>
      <h2>{del.educationRequirements}</h2>
      <h2>{del.email}</h2>
      <h2>{del.jobDescription}</h2> */}
    </>
  );
};

export default JobDel;
