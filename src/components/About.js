import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div>
    <h2>About me</h2>
    <p>I am a Full stack software developer</p>
    <img alt="i made this" src={image}></img>
  </div>
  )
}

export default About;
