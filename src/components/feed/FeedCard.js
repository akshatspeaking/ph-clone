import React from "react";

export default function FeedCard({ props }) {
  return (
    <div className="cardflex">
      <div className="leftrow">
        <div className="logo">
          <img src={props.logo} alt="Product Logo" />
        </div>
        <div className="content">
          <h3 className="heading">{props.heading}</h3>
          <h4 className="tagline">{props.tagline}</h4>
          <div className="footer">
            <sl-button type="default">
              <sl-icon slot="prefix" name="chat-fill"></sl-icon>
              {props.numComments}
            </sl-button>
            <p>{props.tag}</p>
          </div>
        </div>
      </div>
      <div className="upvotes">
        <sl-icon name="caret-up-fill"></sl-icon>
        <sl-button type="text">{props.numUpvotes}</sl-button>
      </div>
    </div>
  );
}
