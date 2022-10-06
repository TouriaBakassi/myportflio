import { Component } from "react";
import "../component/About.css";
import Profile from "./profile.jpg" 
class About extends Component {
  render() {
    return (
      <>
      <div className="ABOUT" id="about">
        <div className="image">
          <img src={Profile} alt="Profile" />
        </div>
        <div  className="Info" id="About">
          <h1>About Me</h1>
          <h3>Let me introduce myself.
</h3>
<div className="line"></div>
          <p>
            
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            id repudiandae dolorum at autem consequuntur, quia dolor. Ipsam
            consectetur vitae quo tempora harum officia nemo minus aspernatur in
            accusantium, dolor magni consequuntur, provident commodi repellat
            laborum temporibus, debitis est accusamus.
            
          </p>
         <a href="#contact"> <button id="Contact">Let's Talk </button></a>
        </div>
        </div>
      </>
    );
  }
}
export default About;
