import React from "react";
import Profile from "./Profile";
import Education from "./Education";

export default function AboutMe() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <Profile />
        <Education />
      </div>
    </div>
  );
}
