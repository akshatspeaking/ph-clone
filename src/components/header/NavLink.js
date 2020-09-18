import React from "react";

export default function NavLink({ name }) {
  return (
    <sl-button type="text" size="medium" className="link">
      {name}
    </sl-button>
  );
}
