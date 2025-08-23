import React from "react";
import "./HowitWorks.css";
// Import your images here
import fabricIcon from "../assets/images/fabric-icon.png"; // Replace with your actual image paths
import embellishmentIcon from "../assets/images/embellishment-icon.png";
import pickupIcon from "../assets/images/pickup-icon.png";

function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: fabricIcon,
      title: "Select Fabric & Style",
      description: "Choose your preferred fabric and abaya style.",
      alt: "Abaya fabric and style selection"
    },
    {
      id: 2,
      icon: embellishmentIcon,
      title: "Add Embellishments",
      description: "Personalize with embroidery, patterns, trim, and more.",
      alt: "Abaya embellishment options"
    },
    {
      id: 3,
      icon: pickupIcon,
      title: "Pick Up in Store",
      description: "Collect your custom abaya in-store in 30 minutes.",
      alt: "Store pickup service"
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="how-it-works-title">How It Works</h2>
        
        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.id} className="step-item">
              <div className="step-icon-container">
                <img 
                  src={step.icon} 
                  alt={step.alt}
                  className="step-icon"
                />
              </div>
              
              <h3 className="step-title">{step.title}</h3>
              
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;