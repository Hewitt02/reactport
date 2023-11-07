import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <div className="container">
        <h2>Resume</h2>

        <div className="resume-content">
          <div className="download-resume">
            <p>Download My Resume:</p>
            <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          </div>

          <div className="proficiencies">
            <h3>Proficiencies:</h3>
            <ul>
              <li>Front-end Development (HTML, CSS, JavaScript)</li>
              <li>React.js and Redux</li>
              <li>Back-end Development (Node.js, Express)</li>
              <li>Database Management (SQL, MongoDB)</li>
              <li>Version Control (Git, GitHub)</li>
              <li>Responsive Web Design</li>
              <li>API Integration</li>
              <li>UI/UX Design Principles</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
