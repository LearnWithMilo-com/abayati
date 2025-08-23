import React from "react";
import "./Home.css";
import CustomSection from "../components/CustomSection"; 
import HowItWorks from "../components/HowitWorks"; // Add this import

function Home() {
  return (
    <div className="home">
      <CustomSection />
      <HowItWorks />  {/* Add this component */}
    </div>
  );
}

export default Home;