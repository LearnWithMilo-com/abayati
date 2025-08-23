import React from "react";
import "./CustomSection.css";
import IMG1 from "../assets/images/IMG1.png";

function CustomSection() {
  return (
    <section className="custom-section">
      <div className="custom-section-container">
        <div className="custom-section-left">
          <h2>Create Your Abaya</h2>
          <p>
            Discover the elegance of custom-made abayas. <br />
            Choose your style, fabric, and design. <br />
            Perfectly tailored for you.
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
        <div className="custom-section-right">
          <img
            src={IMG1}
            alt="Custom Abaya"
            className="custom-section-image"
          />
        </div>
      </div>
    </section>
  );
}

export default CustomSection;