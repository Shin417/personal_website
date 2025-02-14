import React from "react";
import profileImage from "../assets/profile_selfie.jpg";
import githubIcon from "../assets/github-mark.svg";
import linkedInIcon from "../assets/linkedin.png";
import LogoLink from "./LogoLink.jsx";
import List from "./List.jsx";

export default function Profile() {
  return (
    <div className="profile-section">
      <h1>Profile</h1>
      <div className="profile-content">
        <div className="profile-img-link">
          <div className="profile-img-mask">
            <img src={profileImage} alt="profile image" />
          </div>
          <div className="logo-link-list">
            <ul>
              <LogoLink
                name="GitHub"
                img={githubIcon}
                source="https://github.com/dashboard"
              />
              <LogoLink
                name="LinkedIn"
                img={linkedInIcon}
                source="https://www.linkedin.com/in/shintaro-aso-8bb141312/"
              />
            </ul>
          </div>
        </div>
        <div className="profile-list-container">
          <h2>Shintaro Aso</h2>
          <List />
        </div>
      </div>
    </div>
  );
}
