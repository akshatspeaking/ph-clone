import React from "react";

export default function UpcomingCard({ props }) {
  // console.log(props);
  return (
    <div className="side-card">
      <div className="card-left">
        <h3 className="heading">{props.heading}</h3>
        <h4 className="tagline">{props.tagline}</h4>
        <div className="footer">
          <sl-button type="text">
            <sl-icon slot="prefix" name="plus"></sl-icon>
            FOLLOW ({props.numFollowers})
          </sl-button>
        </div>
      </div>
      <div className="logo">
        <img src={props.logo} alt="Product Logo" />
      </div>
    </div>
  );
}
