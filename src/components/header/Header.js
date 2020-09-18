import React from "react";
// import MenuItem from "./MenuItem";
import NavLink from "./NavLink";
import MenuItem from "./MenuItem";

export default function Header({ toggleModal }) {
  return (
    <header>
      <div className="header-left">
        <div className="logo">
          <button className="logo-btn">P</button>
        </div>
        <div className="search">
          <sl-input
            clearable
            placeholder="Discover your next favorite thing..."
            size="medium"
          >
            <sl-icon name="search" slot="prefix"></sl-icon>
          </sl-input>
        </div>
        <div className="nav">
          {["Deals", "Jobs", "Discussions", "Ship", "Mentors"].map((name) => {
            return <NavLink name={name} key={name} />;
          })}

          <sl-dropdown distance="10">
            <sl-button type="text" slot="trigger" id="dot-menu">
              ...
            </sl-button>
            <sl-menu>
              {[
                "Ask",
                "Upcoming",
                "Collections",
                "Topics",
                "Newsletter",
                "Time Travel",
                "Advertise",
                "Post a Job",
                "Promoted Products",
                "Events",
                "Radio",
              ].map((name) => {
                return <MenuItem name={name} key={name} />;
              })}
              <sl-menu-divider></sl-menu-divider>
              <MenuItem name="Apps" />
              <sl-menu-divider></sl-menu-divider>
              {[
                "About",
                "Branding",
                "FAQ",
                "Pro Tips",
                "Terms of Service",
                "Privacy Policy",
                "Cookie Policy",
              ].map((name) => {
                return <MenuItem name={name} key={name} />;
              })}
              {["Blog", "Radio"].map((name) => {
                return <MenuItem name={name} key={name} />;
              })}
            </sl-menu>
          </sl-dropdown>
        </div>
      </div>
      <div className="user-menu">
        <button onClick={toggleModal}>ADD PRODUCT</button>
        <sl-button type="info" size="small" circle>
          <sl-icon name="bell-fill"></sl-icon>
        </sl-button>
        <sl-button type="default" size="medium" circle id="user">
          <sl-avatar image="https://ph-avatars.imgix.net/726999/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop&dpr=2"></sl-avatar>{" "}
        </sl-button>
      </div>
    </header>
  );
}
