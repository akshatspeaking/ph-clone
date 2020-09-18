import React from "react";
import FeedCard from "./FeedCard";

export default function Feed({ items }) {
  return (
    <section className="feed">
      <div className="today">
        <p className="sec-heading">Today</p>
        {items.map((item) => {
          return <FeedCard props={item} key={Math.random()} />;
        })}
      </div>
      <div className="sec-footer">
        <p>VIEW MORE</p>
      </div>
    </section>
  );
}
