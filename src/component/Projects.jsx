import { Component } from "react";
import "./Projects.css";
import Image1 from "../component/Project1.png";
import Image2 from "./Accordion.png";
class Projects extends Component {
  render() {
    return (
      <>
        <div className="PROJECTS">
          <div className="title">
            <h1>Projects</h1>
          </div>

          <div className="page-content">
            <div className="card">
              <div className="image1">
                <img src={Image1} alt="img1" />
              </div>
              <div className="content">
                <h2>Website 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.1 </p>
               <a href="https://touriabakassi.github.io/JS-Project-14-Time/" target="_blank"> <button>Visit Website</button></a>
               <a href="https://github.com/TouriaBakassi/JS-Project-14-Time" target="_blank"><button>Code Source</button></a> 
              </div>
            </div>
            <div className="card">
              <div className="image2">
                <img src={Image2} alt="img1" />
              </div>
              <div className="content">
                <h2>Website 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.2 </p>
                <a href="https://touriabakassi.github.io/JS-Project-6-Accordion/" target="_blank"> <button>Visit Website</button></a>
               <a href="https://github.com/TouriaBakassi/JS-Project-6-Accordion" target="_blank"><button>Code Source</button></a> 
              </div>
            </div>

            <div className="card">
              <div className="image3">
                <img src={Image1} alt="img1" />
              </div>
              <div className="content">
                <h2>Website 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <a href="touriabakassi.github.io/Todolist/"> <button>Visit Website</button></a>
               <a href="https://github.com/TouriaBakassi/Todolist"><button>Code Source</button></a> 
              </div>
            </div>
            <div className="card">
              <div className="image4">
                <img src={Image1} alt="img1" />
              </div>
              <div className="content">
                <h2>Website 4</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <a href="https://touriabakassi.github.io/JS-Project-3-clone-Instagram/"> <button>Visit Website</button></a>
               <a href="https://github.com/TouriaBakassi/JS-Project-3-clone-Instagram"><button>Code Source</button></a> 
              </div>
            </div>
            <div className="card">
              <div className="image5">
                <img src={Image1} alt="img1" width="100%"  />
              </div>
              <div className="content">
                <h2>Website 5</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <a href=""> <button>Visit Website</button></a>
               <a href=""><button>Code Source</button></a> 
              </div>
            </div>
            <div className="card">
              <div className="image6">
                <img src={Image1} alt="img1" />
              </div>
              <div className="content">
                <h2>Website 6</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <a href="#">
                  <button>Visit Website</button>
                </a>
                <a href="#">
                  <button>Code Source</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Projects;
