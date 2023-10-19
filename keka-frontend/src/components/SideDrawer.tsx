"use client";
import React from "react";
import Image from "next/image";
import "./drawer.css";
const DrawerPage = () => {
  return (
    <div className="side-drawer">
      <div className="side-drawer-content">
        <div className="home-section">
          <img className="home-img" src="../assets/home.png" alt="homeIcon" />
          <p>Home</p>
        </div>
        <div className="home-section">
          <img className="home-img" src="../assets/user.png" alt="homeIcon" />
          <p>Me</p>
        </div>
        <div className="home-section">
          <img className="home-img" src="../assets/inbox.png" alt="homeIcon" />
          <p>Inbox</p>
        </div>
        <div className="home-section">
          <img className="home-img" src="../assets/group.png" alt="homeIcon" />
          <p>My Team</p>
        </div>
        <div className="home-section">
          <img className="home-img" src="../assets/rupee.png" alt="homeIcon" />
          <p>My Finances</p>
        </div>
        
        <div className="home-section">
            <img src="../assets/cotporate.png" alt="groupIcon" />
            <p>Org</p>
        </div>
      
      </div>
    </div>
  );
};
export default DrawerPage;
