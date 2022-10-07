import { Component } from "react";
import "./Education.css";
import UH2 from "./UH2.png";
import WA3 from "./3wa.png";

class Education extends Component{
    render(){
        return(
            <>
            <div id="Education" className="EDUCATION">
<h1>Education</h1>
<div className="Etude">
    <img className="img1" src={UH2} alt="" />
    <div className="title">
        <h3>2020-2022</h3>
        <h2>Université Hassan II</h2>
        
    </div>
    <p>Une experience de deux ans en sciences de la matiere chimie.</p>
</div>
<div className="Etude">
    <img className="img2" src={WA3} alt="" />
    <div className="title2">
        <h3>2022-2023</h3>
        <h2>3W ACADEMY</h2>
        
    </div>
    <p>Une experience de deux mois en developpement web parti Front-End.</p>
</div>
<a href="https://touriabakassi.github.io/My-CV/" target="_blank"><button>MORE DETAILS</button></a>
          <a href="#Home" className="totop"><i class="fa-solid fa-circle-chevron-up"></i></a>
          
            </div>

            </>
        )
    }
}
export default Education;