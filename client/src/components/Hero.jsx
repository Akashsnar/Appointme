import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
        Time for Health: <br />
        Your App, Your Doctor, Your Well-Being. 
        </h1>
        <p style={{fontSize:'1.5rem'}}>
        Save time spent on coordinating appointments over phone and email with an all-in-one appointment booking software. Accept online bookings 24x7, automate payments, business management, marketing, and more!


        </p>
      </div>
      <div className="hero-img">
        <img
          src='https://www.askapollo.com/assets/images/book-appointment-bg.png'
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
