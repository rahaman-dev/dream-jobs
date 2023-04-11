import React, { useEffect, useState } from "react";
import Loca from "../Loca/Loca";
import "./AppliedJob.css";

const AppliedJobs = () => {
  const [local, setLocal] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

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

  const handleFilterSelection = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

  return (
    <div>
      <div className="textRightPadding">
        <select
          style={{ width: "120px", height: "25px", marginTop: "20px" }}
          id="select-option"
          value={selectedOption}
          onChange={handleFilterSelection}
        >
          <optgroup style={{ fontSize: "17px" }} label="Filter By">
            <option value="Remote" style={{ fontSize: "17px" }}>
              Remote
            </option>
            <option value="onSite" style={{ fontSize: "17px" }}>
              On Site
            </option>
          </optgroup>
        </select>
      </div>
      {local && local.map((loca, idx) => <Loca key={idx} loca={loca}></Loca>)}
    </div>
  );
};

export default AppliedJobs;
