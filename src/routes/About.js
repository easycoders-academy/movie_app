import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>О проекте: я сделал этот проект, потому что люблю фильмы</span>
    </div>
  );
}

export default About;
