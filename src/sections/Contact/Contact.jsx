import React from 'react';
import './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Kontakt</h2>
      <p>Skontaktuj się ze mną:</p>
      <ul>
        <li>Email: twojemail@example.com</li>
        <li>LinkedIn: <a href="https://linkedin.com/in/twojprofil" target="_blank" rel="noopener noreferrer">Twój profil</a></li>
        <li>Telefon: +48 123 456 789</li>
      </ul>
    </section>
  );
}

export default Contact;
