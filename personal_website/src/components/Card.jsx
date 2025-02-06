import React from "react";

export default function Card(props) {
  const { img, title, description, source} = props;
  return (
    <a href={source}>
      <div className="card-frame">
        <div className="card-img">
          <img src={img} alt={title} />
        </div>
        <div className="card-info">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}
