import React from "react";

export default function Modal({ show, addProduct }) {
  if (show) {
    return (
      <div>
        <input type="text" className="form-logo" placeholder="Logo" />
        <input type="text" className="form-heading" placeholder="Heading" />
        <input type="text" className="form-tagline" placeholder="Tagline" />
        <button onClick={addProduct}>ADD</button>
      </div>
    );
  } else return null;
}
