import React from "react";
import sophiaIcon from "../assets/sophiaImage.png";
import georgianIcon from "../assets/georgianLogoImage.png";

export default function Education() {
  const schools = [
    {
      id: 1,
      icon: sophiaIcon,
      name: "Sophia University",
      location: "Tokyo, Japan",
      major: "Information Science and Technology",
      current: "(2022-Temporary absent from school)",
      subjects: [
        "University Level Mathematics",
        "Algorithm",
        "Computer Mechanism",
      ],
    },
    {
      id: 2,
      icon: georgianIcon,
      name: "Georgian College",
      location: "Barrie, Ontario",
      major: "Computer Programming",
      current: "(2024-Present)",
      subjects: [
        "Fundamental Programming Skills",
        "Framework",
        "Network",
        "Database",
        "Web Development",
      ],
    },
  ];

  return (
    <div className="education-section">
      <h1>Education</h1>
      <div className="education-content">
        {schools.map((school)=>(
            <div className="school-info" key={school.id}>
                <div className="school-icon">
                    <img src={school.icon} alt={school.name} />
                </div>
                <div className="school-description">
                    <h1 className="school-name">{school.name}</h1>
                    <h2 className="school-location">{school.location}</h2>
                    <h3 className="school-major">{school.major}</h3>
                    <h3 className="school-current">{school.current}</h3>
                    <ul>
                    {school.subjects.map((subject)=>(
                        <li key={subject}>{subject}</li>
                    ))}
                    </ul>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
