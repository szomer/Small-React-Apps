import React from "react";
import "./return-home-button.css";
import { NavLink } from "react-router-dom";

const ReturnHomeButton = (state) => {
  return (
    <NavLink className="return-button" to={"/posts"}>
      &#8678;
    </NavLink>
  );
};

export default ReturnHomeButton;
