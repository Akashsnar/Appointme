import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src='https://www.bpmcdn.com/f/files/victoria/import/2023-01/31628750_web1_Doctor_stock-dr.jpg'
              alt="hero"
              style={{borderRadius:'50px'}}
            />
          </div>
          <div className="hero-content">
            <p style={{fontSize:'1.5rem'}}>
            we understand that your time is valuable, and so is your health. That's why we've created a user-centric experience that puts you in control. Our intuitive app allows you to effortlessly book, reschedule, and manage your appointments with just a few taps, ensuring that you can focus on what matters most – your health.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
