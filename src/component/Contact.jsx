import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";




 const Contact=()=>{ 
  
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tylsbqm', 'service_tylsbqm', form.current, 'Z57vMao7E-LX5hJA1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

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
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="to_name" placeholder="Your Name" />
              <input type="email" name="from_name" placeholder="Your Email" />
              <input type="text" name="from_email" placeholder="Your Subject" />
              <textarea
                name="message"
                id="Mssg"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              
                <button type="submit"> SEND  </button>
             
            </form>
          </div>
        </div>
      </>
    );
  
}

export default Contact;