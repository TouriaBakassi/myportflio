import { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <>
        <div id="contact" className="CONTACT">
          <div  className="SayHi">
            <h1>Contact</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nisi,
              officiis modi nemo quia ipsa! Perferendis placeat optio
              consequatur aliquid.
            </p>
            <h4 className="tele">+(212) 659-72-11-77</h4>
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
              <a href="#">
                <button>SEND</button>
              </a>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Contact;
