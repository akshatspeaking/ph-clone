import React from "react";

export default function HiringCard({ props }) {
  return (
    <div className="side-card">
      <div className="card-left">
        <h3 className="heading">{props.company}</h3>
        <h4 className="tagline">{props.role}</h4>
        <div className="footer">
          <h4 className="tagline">{props.location}</h4>
        </div>
      </div>
      <div className="logo">
        <img src={props.logo} alt="" />
      </div>
    </div>
  );
}
