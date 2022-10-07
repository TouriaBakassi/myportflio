import { Component } from "react";
import "./Testimonials.css";

class Testimonials extends Component {
  render() {
    return (
      <>
        <div className="Testimonials">
          
          <div className="Quotes">
            <h1>Best Quotes That Made Me a Developper</h1>
            <div className="quote">
              <p>
                "Learning to write programs stretches your mind, and helps you
                think better, creates a way of thinking about things that I
                think is helpful in all domains."
              </p>
              <span>- Bill Gates</span>
            </div>
            <div className="quote">
              <p>
                "Learning to code is useful no matter what your career ambitions
                are."
              </p>
              <span>- Arianna Huffington, Founder, The Huffington Post</span>
            </div>
            <div className="quote">
              <p>
                "If you are on social media, and you are not learning, not
                laughing, not being inspired or not networking, then you are
                using it wrong."
              </p>
              <span>- Germany Kent, American broadcaster</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Testimonials;
