import { Component } from "react";
import "../component/About.css";
import Profile from "./profile.jpg";
class About extends Component {
  render() {
    return (
      <>
        <div className="ABOUT" id="about">
          <div className="image">
            <img src={Profile} alt="Profile" />
          </div>
          <div className="Info" id="About">
            <h1>About Me</h1>
            <h3>Let me introduce myself.</h3>
            <div className="line"></div>
            <p>
              Après Deux ans d'études universitaires en sciences chimiques, j'ai
              décidé d'intégrer le bootcamp de la 3W Academy pour faire un
              "Switch" d'une façon rapide et efficace vers le monde de
              développement Web.
            </p>
            <a href="#contact">
              {" "}
              <button id="Contact">Let's Talk </button>
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default About;
