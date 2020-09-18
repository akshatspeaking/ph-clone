import React from "react";

export default function DiscussionCard({ props }) {
  return (
    <div className="side-card discussion">
      <div className="card-left">
        <h3 className="heading">{props.question}</h3>
        <div className="footer">
          <sl-button type="text">
            <sl-icon name="caret-up-fill"></sl-icon>
            {props.numUpvotes}
          </sl-button>
          <sl-button type="text">
            <sl-icon slot="prefix" name="chat-fill"></sl-icon>
            {props.numComments}
          </sl-button>
          <sl-button type="text">Join discussion</sl-button>
        </div>
      </div>
      <div className="logo">
        <sl-avatar image={props.avatar} alt="User avatar"></sl-avatar>
      </div>
    </div>
  );
}
