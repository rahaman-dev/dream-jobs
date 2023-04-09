import React from "react";

const Error = () => {
  return (
    <div
      div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "8px solid #4B5563",
          borderRadius: "50%",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={{ fontSize: "20px", color: "#4B5563" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div>
        <h2 style={{ fontSize: "150px", color: "#4B5563", fontWeight: "800" }}>
          404
        </h2>
        <h2 style={{ color: "#4B5563" }}>No route matches URL</h2>
      </div>
    </div>
  );
};

export default Error;
