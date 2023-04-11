import React, { useEffect, useState } from "react";
import Loca from "../Loca/Loca";
import "./AppliedJob.css";

const AppliedJobs = () => {
  const [local, setLocal] = useState([]);
  const [buttonValue, setButtonValue] = useState("");
  const [buttonValueTow, setButtonValueTow] = useState("");

  useEffect(() => {
    let getJobFromLocalStorage = JSON.parse(localStorage.getItem("details"));
    if (getJobFromLocalStorage) {
      setLocal(getJobFromLocalStorage);
    }
  }, []);

  function handleClick(event) {
    setButtonValue(event.target.value);
    let getJobFromLocalStorage = JSON.parse(localStorage.getItem("details"));
    let name = getJobFromLocalStorage.filter(
      (data) => data.poistion1 === buttonValue
    );
    setLocal(name);
  }

  function handleClickTow(event) {
    setButtonValueTow(event.target.value);
    let getJobFromLocalStorage = JSON.parse(localStorage.getItem("details"));
    let nameTow = getJobFromLocalStorage.filter(
      (data) => data.poistion1 === buttonValueTow
    );
    setLocal(nameTow);
  }

  return (
    <div>
      <img src="/public/banner.jpg" alt="" width={"100%"} height={"200px"} />
      <div className="textRightPadding">
        <button value="remote" onClick={handleClick} className="btn">
          remote
        </button>
        <button value="onSite" onClick={handleClickTow} className="btn">
          onSite
        </button>
      </div>
      {local && local.map((loca, idx) => <Loca key={idx} loca={loca}></Loca>)}
    </div>
  );
};

export default AppliedJobs;
