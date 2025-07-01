import React, { useState } from 'react';

const About = () => {
  const [modalImage, setModalImage] = useState(null);

  const openImage = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">01. About Me</h2>
        <p className="section-subtitle">Here's my story and what drives me in this digital world.</p>

        <div className="about-content">
          <p>
            I'm Lemark Rosales, a passionate full-stack developer based in Manila, Philippines.
            I specialize in creating exceptional digital experiences that are fast, accessible,
            and visually appealing.
          </p>
          <p>
            I recently graduated with a Bachelor of Science in Computer Science on June 9, 2025.
            During my academic journey, I had the opportunity to train as a full-stack developer
            during my On-the-Job Training at <strong>Sprobe Inc.</strong>.
          </p>
        </div>

        <div className="about-documents">
          <h4>Certifications & Achievements</h4>
          <div className="documents-grid">
            <div className="doc-card" onClick={() => openImage('/images/diploma.jpg')}>
              <img src="/images/diploma.jpg" alt="Diploma" />
              <p>BSCS Diploma (2025)</p>
            </div>
            <div className="doc-card" onClick={() => openImage('/images/ojt-certificate.jpg')}>
              <img src="/images/ojt-certificate.jpg" alt="OJT Certificate" />
              <p>OJT – Full-stack Developer (Sprobe Inc.)</p>
            </div>
          </div>
        </div>

      {modalImage && (
  <div className="popup-preview" onClick={closeModal}>
    <img src={modalImage} alt="Preview" />
    <span className="popup-close">×</span>
  </div>
)}

      </div>
    </section>
  );
};

export default About;
