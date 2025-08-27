import React from 'react';

export default function Projects() {
  return (
    <section className="projects-section">
      <h2>PROJECTS</h2>
      <div className="project-card">
        <h3>Work Task Task Tracking System</h3>
        <p><strong>Description:</strong> Designed and developed a project and task management application to enhance organization and tracking efficiency. The system allows task owners to create, edit, delete, and mark tasks as completed. It also provides task management features with sorting options based on priority and creation date. A dashboard tracks all activities (total, completed, ongoing, and upcoming), along with a dedicated user profile section.<br /><strong>Tech Stack:</strong> HTML, JavaScript, TypeScript, Node.js, MongoDB, Tailwind CSS.</p>
      </div>
      <div className="project-card">
        <h3>LearnSphere</h3>
        <p><strong>Description:</strong> LearnSphere is an online learning platform to connect students and trainers through structured courses and interactive content. It allows students to browse, enroll, and access lessons seamlessly, while trainers can create and manage courses. The platform also features secure payment integration and tracks the enrollment process.<br /><strong>Tech Stack:</strong> Java, Spring Boot, Spring Data JPA, MySQL Connector, Spring Boot DevTools, Spring Web, Thymeleaf, HTML, CSS, JavaScript, MySQL, Razorpay API.</p>
      </div>
      <div className="project-card">
        <h3>Bus Ticket Booking Management System</h3>
        <p><strong>Description:</strong> Designed and implemented a database-driven system enabling users to search routes, book/cancel tickets, and track booking history. Ensured secure operations, reliable data storage, and smooth user experience, including admin controls for efficient route, bus, and fare management.<br /><strong>Tech Stack:</strong> MySQL, Java, HTML, CSS, Eclipse.</p>
      </div>
      <div className="project-card">
        <h3>Event Management System</h3>
        <p><strong>Description:</strong> The system enables users to efficiently create, manage, and track events with features such as event registration, attendee management, and real-time updates. It streamlines the entire event workflow, making it suitable for everything from small gatherings to large-scale conferences.<br /><strong>Tech Stack:</strong> JavaScript, MongoDB, VS Code.</p>
      </div>
      <div className="project-card">
        <h3>AI-Driven Green Logistics & JIT Delivery Dashboard</h3>
        <p><strong>Description:</strong> Developed a logistics dashboard optimizing delivery schedules and reducing CO₂ emissions. Integrated Google Maps and Climatiq APIs for live route and emissions analysis. Implemented AI-based Just-in-Time inventory planning with real-time sensitivity scoring. Provided logistics teams with intuitive insights into delivery efficiency and carbon impact. Bridged environmental goals with operational efficiency in supply chain systems.<br /><strong>Tech Stack:</strong> React, FastAPI, Python, Google Maps API, Climatiq API, PostgreSQL.</p>
      </div>
      <div className="project-card">
        <h3>Automated Billing & Transaction Management Platform</h3>
        <p><strong>Description:</strong> Created a secure billing system to handle weekly sales, returns, and payment operations. Enabled user authentication and authorization to ensure data integrity and user-specific access. Automated dues calculation and operator-wise report generation, reducing manual overhead. Enhanced financial accuracy and workflow efficiency for business operators. Designed with scalability and real-world utility in mind.<br /><strong>Tech Stack:</strong> Python (Flask), HTML, CSS, JavaScript, AWS, Docker, MySQL, GitHub.</p>
      </div>
    </section>
  );
}
