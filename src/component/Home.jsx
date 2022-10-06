import "./Home.css";
import ParticlesBackground from "../components/ParticlesBackground";
import { TypeAnimation } from "react-type-animation";
import { Component, useState } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBar: false,
    };
  }
  render() {
    let { activeBar } = this.state;
    return (
      <><ParticlesBackground />
        <div className="Home" id="Home">
          

          <i
            onClick={() => {
              this.setState({ activeBar: !activeBar });
            }}
            id="iconbar"
            className="fa-solid fa-bars"
          ></i>
          <nav className={activeBar ? "activebar" : ""}>
            {/* <nav className="activebar"> */}

            <ul>
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Education">Education</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#Testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#Blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="particleheader">
            <h1>HELLO, WORLD</h1>
            <h5>
              <TypeAnimation
                sequence={[
                  "I am Touria Bakassi ", // Types 'One'
                  1000, // Waits 1s
                  "Front-End developper", // Deletes 'One' and types 'Two'
                  1000, // Waits 1s
                  "Welcome To My Portfolio..", // Types 'Three' without deleting 'Two'
                  2000, // Waits 2s
                ]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1em" }}
              />
            </h5>
<div  className="MOUSE">
 <a href="#about"> <span className="mouse">
    <span className="mousewheel"></span>
  </span></a>
</div>
<div className="social-media">
            <div className="line1"></div>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <div className="line2"></div>
          </div>

          </div>

          
        </div>
      </>
    );
  }
}

export default Home;
