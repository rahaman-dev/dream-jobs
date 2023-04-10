import React from "react";
const job = jsonData.find((job) => job._id === match.params.id);

const jobDetails = ({ job }) => {
  return (
    <div>
      <h1>{job.jobTitle}</h1>
      <p>{job.jobDescription}</p>
      <ul>
        {job.jobResponsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <p>Education Requirements: {job.educationRequirements}</p>
      <p>Job Experiences: {job.jobExperiences}</p>
    </div>
  );
};

export default jobDetails;
