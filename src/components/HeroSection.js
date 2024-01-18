import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";

const HeroSection = () => {
  return (
    <section className="hero">
      <img
        src="https://cdn.pixabay.com/photo/2015/02/26/15/40/doctor-650534_1280.jpg"
        alt="Hero"
      />
      <h1>Welcome to Fix Health</h1>
      <p>Your path to a healthier life starts here.</p>
      <Link
        to={"/booking"}
        style={{
          textDecoration: "none",
          background: "white",
          border: "2px solid blue",
          borderRadius: 10,
          padding: '4px 10px',
          color:'black',
        }}
      >
        Booking Form
      </Link>
      <Testimonials/>
    </section>
  );
};

export default HeroSection;
