import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
        <h2>About Me</h2>
        <p>this a very hardworking web developer and they need a job!</p>
        <img
        src={ image}
        alt="I made this"/>
  </div>;
}

export default About;