import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate submission
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a question or want to work together? Let's connect!</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
          {submitted && <p className="success-message">Thanks! I'll get back to you soon.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
