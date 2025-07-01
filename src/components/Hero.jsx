import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-text">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-title">Lemark Rosales.</h1>
          <h2 className="hero-subtitle">I build full-stack web apps & experiences.</h2>
          <p className="hero-description">
            I'm a developer focused on creating fast, accessible, and user-friendly applications using technologies like React, Laravel, and Godot.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img src="/images/LemarkProfile.jpg" alt="Lemark Rosales" className="hero-profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
