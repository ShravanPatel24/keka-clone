// "use client";
import React from "react";
import Image from "next/image";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="header">
        <div className="header-content">
          <div className="keka-image">
            <img src="..\assets\keka.png" alt="kekalogo" />
          </div>
            <h2>
                softobiz techologies pvt ltd.
            </h2>
            <div className="search-container">
              <div className="search-img">
                  <img src="../assets/search-icon.png" alt="searchIcon" />
              </div>
              <input type="text" className="searchInput" placeholder="Search employees or actions (Ex: Apply Leave, Attendance Approvals"/>
            </div>
            <div className="profile-dection">
              <h2> AMIT KUMAR</h2>
              <div className="down-img">
                  <img src="../assets/down.png" alt="searchIcon" />
              </div>
              <div className="profile-pic">
                <img src="../assets/profile.png" alt="profileImg" />
              </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
