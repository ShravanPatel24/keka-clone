// "use client";
import React from "react";
import "./SideDrawer.css";
const SideDrawer = () => {
  return (
    <>
    <div className="side-drawer">
      <div className="side-drawer-content">
        <div className="home-section">
          <img className="home-img" src="../assets/home.png" alt="homeIcon" />
          <p>Home</p>
        </div>
        <div className="home-section">
          <img className="home-img" src="../assets/user.png" alt="userIcon" />
          <p>Me</p>
        </div>
        <div className="home-section">
          <img className="home-img" src="../assets/inbox.png" alt="inboxIcon" />
          <p>Inbox</p>
        </div>
        <div className="home-section">
          <img className="home-img" src="../assets/group.png" alt="groupIcon" />
          <p>My Team</p>
        </div>
        <div className="home-section">
          <img className="home-img" src="../assets/rupee.png" alt="rupeeIcon" />
          <p>My Finances</p>
        </div>
        <div className="home-section">
          <img className="home-img" src="../assets/corporate.png" alt="corporateIcon" />
          <p>Org</p>
        </div>
      </div>
    </div>
    </>
  );
};
export default SideDrawer;
