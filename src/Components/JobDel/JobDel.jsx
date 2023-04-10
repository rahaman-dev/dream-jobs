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

  let dels = jobDel && jobDel?.filter((job) => job._id === dynamic._id);

  return (
    <>
      {dels.map((del, idx) => (
        <Del key={idx} del={del}></Del>
      ))}
    </>
  );
};

export default JobDel;
