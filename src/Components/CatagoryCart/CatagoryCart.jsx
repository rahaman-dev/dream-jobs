import React from "react";
import "./catagoryCart.css";

const CatagoryCart = ({ cart }) => {
  const { icon, companyName, jobTitle } = cart;
  return (
    <div className="catagoryCart">
      <img src={icon} alt="" className="icon" />
      <h2>{companyName}</h2>
      <p>{jobTitle}</p>
    </div>
  );
};

export default CatagoryCart;
