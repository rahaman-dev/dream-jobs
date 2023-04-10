import React from "react";

const Loca = ({ loca }) => {
  const {
    salary,
    companyLogo,
    companyName,
    phone,
    email,
    address,
    jobDetails,
    jobDescription,
    jobResponsibilities,
    educationRequirements,
    jobExperiences,
    jobTime,
    _id,
  } = loca;
  return (
    <div>
      <h2>{companyName}</h2>
    </div>
  );
};

export default Loca;
