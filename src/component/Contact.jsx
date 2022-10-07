import { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <>
        <div id="contact" className="CONTACT">
          <div  className="SayHi">
            <h1>Say Hi!</h1>
            <p>" 
            If you wanna get in touch, talk to me about a project collaboration or just Say Hi."
            </p>
            <a href="tel:+212 659721177" className="tele"><h4>+(212) 659-72-11-77</h4></a>
          </div>
          <div className="form">
            <h2>Let's grab a coffee and jump on conversation <span> chat with me.</span></h2>
            <form>
              <input type="text" name="nom" placeholder="Your Name" />
              <input type="email" name="email" placeholder="Your Email" />
              <input type="text" name="subject" placeholder="Your Subject" />
              <textarea
                name="Message"
                id="Mssg"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              
                <button><a href=" mailto: Touria_Bakassi@outlook.com"> SEND  </a></button>
             
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Contact;