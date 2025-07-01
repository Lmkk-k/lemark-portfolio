import React from 'react';
import {
  FaReact, FaJsSquare, FaNodeJs, FaHtml5, FaCss3Alt,
  FaAws, FaGitAlt, FaDocker, FaPython
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiGraphql, SiFigma } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'UI/UX Design', icon: <SiFigma /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'UI/UX Design (Figma)', icon: <SiFigma /> },


  // ✅ Without icons
  { name: 'PHP', icon: null },
  { name: 'Laravel', icon: null },
  { name: 'C#', icon: null },
  { name: '.NET MVC', icon: null },
];


const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">02. My Skills</h2>
        <p className="section-subtitle">Technologies I work with regularly:</p>

        <div className="skills-marquee">
          <div className="marquee-track">
            {skills.concat(skills).map((skill, index) => (
              <span key={index} className="marquee-skill">
                <span className="skill-icon">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
