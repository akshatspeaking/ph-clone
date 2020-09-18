import React from "react";
import UpcomingCard from "./UpcomingCard";
import HiringCard from "./HiringCard";
import DiscussionCard from "./DiscussionCard";

export default function Sidebar() {
  let upcoming = [
    {
      heading: "courtd",
      tagline: "Last-minute court appearances",
      logo:
        "https://ph-files.imgix.net/e84c7f65-98a4-4172-8346-25d386afa3ba?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&bm=normal&bf=max&bh=20&bw=20&dpr=2",
      numFollowers: 42,
    },
    {
      heading: "UniVal",
      tagline: "Evaluate anything. Customize everything.",
      logo:
        "https://ph-files.imgix.net/ead2de91-5691-4c1a-a592-8dafed3ab280.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&bm=normal&bf=max&bh=20&bw=20&dpr=2",
      numFollowers: 191,
    },
    {
      heading: "ClearQuery",
      tagline: "No Queries. Just Questions.",
      logo:
        "https://ph-files.imgix.net/e4d248e5-783d-48f8-9f0e-3202194ba415?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&blend=a147e61b-3de8-4ea8-af8a-fbcbd6f4b4c2&bm=normal&bf=max&bh=20&bw=20&bg=000000&bri=-40&dpr=2",
      numFollowers: 263,
    },
    {
      heading: "Magnetix",
      tagline: "A to-do list app built for efficiency hackers.",
      logo:
        "https://ph-files.imgix.net/15989401-c4b4-44b0-8168-74c7b766cc3e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&bm=normal&bf=max&bh=20&bw=20&dpr=2",
      numFollowers: 58,
    },
  ];
  let hiring = [
    {
      company: "Instantish",
      role: "Sofware Engineer",
      logo:
        "https://ph-files.imgix.net/fe9b6850-5cc2-4661-955d-38583ac79f0b?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&fit=max&dpr=2",
      location: "San Francisco, Remote",
    },
    {
      company: "AEI Group Ltd",
      role: "Front-end Engineer",
      logo: "",
      location: "Remote US",
    },
    {
      company: "Automattic",
      role: "Backend Engineer",
      logo: "",
      location: "Asia, Remote",
    },
    {
      company: "Modal",
      role: "Product Manager",
      logo: "",
      location: "Remote",
    },
  ];
  let discussions = [
    {
      question: "Share your product here to get support, feedback, users",
      avatar:
        "https://ph-avatars.imgix.net/2424721/3e0254ad-75e3-4b96-b424-dc95e6aea17c?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2",
      numUpvotes: 42,
      numComments: 7,
    },
    {
      question: "Asking family members to invest in your start up?",
      avatar:
        "https://ph-avatars.imgix.net/2828818/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2",
      numUpvotes: 39,
      numComments: 42,
    },
    {
      question: "What were your achievements last week? 🚀💪",
      avatar:
        "https://ph-avatars.imgix.net/726999/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2",
      numUpvotes: 70,
      numComments: 163,
    },
  ];

  return (
    <>
      <section className="upcoming">
        <div>
          <p className="sec-heading">
            Upcoming Products
            <small>Powered by Ship</small>
          </p>
          {upcoming.map((item) => {
            return <UpcomingCard props={item} key={Math.random()} />;
          })}
        </div>
        <div className="sec-footer">
          <p>VIEW MORE</p>
        </div>
      </section>
      <section className="hiring">
        <div>
          <p className="sec-heading">Hiring Now</p>
          {hiring.map((item) => {
            return <HiringCard props={item} key={Math.random()} />;
          })}
        </div>
        <div className="sec-footer">
          <p>VIEW MORE</p>
        </div>
      </section>
      <section className="discussions">
        <div>
          <p className="sec-heading">Top Discussions</p>
          {discussions.map((item) => {
            return <DiscussionCard props={item} key={Math.random()} />;
          })}
        </div>
        <div className="sec-footer">
          <p>VIEW MORE</p>
        </div>
      </section>
    </>
  );
}
