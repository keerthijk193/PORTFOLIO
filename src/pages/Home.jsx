import React from 'react';

export default function Home() {
  return (
    <section className="home-section">
      <div style={{display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center'}}>
        <img src="/profile.jpg" alt="Profile" style={{width: '320px', height: '320px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 4px 24px #4285f4'}} />
        <div style={{minWidth: '320px', maxWidth: '420px'}}>
          <h1>KEERTHI J K</h1>
          <p><strong>Address:</strong> Sri Lakshmi Venkateswara PG for ladies, CMRIT College back gate, AECS layout, A Block, Bengaluru, Karnataka-560037.</p>
          <p><strong>Email ID:</strong> <a href="mailto:kek22cs@cmrit.ac.in">kek22cs@cmrit.ac.in</a> / <a href="mailto:keerthi.k193@gmail.com">keerthi.k193@gmail.com</a></p>
          <p><strong>Phone:</strong> +91 6361360788</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/keerthi-j-k-765522309/" target="_blank" rel="noopener noreferrer">linkedin.com/in/keerthi-j-k-765522309</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/keerthijk193" target="_blank" rel="noopener noreferrer">github.com/keerthijk193</a></p>
          <p><strong>Career Objective:</strong> Aspire to work as a Software Developer. I bring a strong commitment to learning, adaptability, and a passion for problem-solving. I am a responsible and organized individual keen to acquire knowledge and learn new technologies while helping the company achieve its goals.</p>
        </div>
      </div>
    </section>
  );
}
