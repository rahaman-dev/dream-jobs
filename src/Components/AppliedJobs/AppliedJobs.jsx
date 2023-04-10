import React, { useEffect, useState } from "react";
import Loca from "../Loca/Loca";

const AppliedJobs = () => {
  const [local, setLocal] = useState([]);
  useEffect(() => {
    let getTitleFromLocalStorage = JSON.parse(localStorage.getItem("details"));
    if (getTitleFromLocalStorage) {
      setLocal(getTitleFromLocalStorage);
    }
  }, []);

  // let getTitleFromLocalStorage = localStorage.getItem("details");
  // console.log(getTitleFromLocalStorage);
  // let message;
  // if (getTitleFromLocalStorage == null) {
  //   message = <h2>please apply a job</h2>;
  // }

  return (
    <div>
      {/* {local.length <= 1 ? "Please apply a job" : ""} */}
      {local.map((loca, idx) => (
        <Loca key={idx} loca={loca}></Loca>
      ))}
    </div>
  );
};

export default AppliedJobs;
