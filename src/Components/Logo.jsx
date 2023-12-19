import React from "react";
import "./Logo.css";

const Logo = ({ includeSlash = false }) => {
  return (
    <>
      <div className="nav-logo">
        <p className="nav-open">&lt;</p>
        {includeSlash && <p className="slash">/</p>}
        <h1 className="logo-nav">JP</h1>

        <p className="nav-close">&gt;</p>
      </div>
    </>
  );
};

export default Logo;
