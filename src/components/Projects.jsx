import React from 'react';

const projects = [
  {
    title: '🚗 Gamified Traffic App',
    description: 'An interactive Android game that teaches Cebu commuters about directions, traffic rules, and jeepney routes through mini-games and quizzes. Built with Godot and GIS-inspired logic.',

  },
  {
    title: '🐶 Pet Organizer',
    description: 'A secure web app for managing pet information, including profiles, health records, and reminders. Includes user authentication and data tracking features.',

  },
  {
    title: '🛍️ Shop System',
    description: 'Custom shop feature that lets users request personalized services, submit forms, and interact with an admin dashboard. Built with React and Laravel.',

  },
  {
    title: '🏨 Hotel Booking Website',
    description: 'A full-stack hotel management system with booking, check-in/out, and admin panel. Implements MVC architecture with full CRUD and user roles.',

  },
  {
    title: '📋 Task Management App',
    description: 'A lightweight task and to-do app that includes filtering, sorting, due dates, and task status tracking. Built using React frontend and Laravel backend.',

  },
  {
    title: '🗓️ Event Calendar App',
    description: 'Calendar application that supports event scheduling, notifications, and color-coded categories. Built with React and Laravel with full CRUD functionality.',
 
  },
];


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some things I’ve built recently.</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
