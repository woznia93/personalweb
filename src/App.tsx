import React from 'react';
import './App.css';

type Job = {
  title: string;
  company: string;
  year: string;
  description: string;
};

const jobs: Job[] = [
  {
    title: "Research Assistant",
    company: "Michigan State University",
    year: "2023-Present",
    description: "Conducted research on advanced machine learning algorithms and data processing."
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App_Header">
        <h1>Welcome to My Personal Website</h1>
      </header>

      {/* About Me Section */}
      <section id="about-me" style={{ padding: "20px", backgroundColor: "#f4f4f4" }}>
        <h2>About Me</h2>
        <p>
          Hello! I'm Brady Wozniak, a hopeful developer with experience in building modern web 
          applications. I enjoy learning new technologies and collaborating on projects. In my spare time, I enjoy spending time with friends and playing soccer.
        </p>
      </section>

      {/* Resume Section */}
      <section id="resume" style={{ padding: "20px", backgroundColor: "#e2e2e2" }}>
        <h2>My Resume</h2>
        <p>Here is a brief summary of my work experience and skills:</p>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <strong>{job.title}</strong> at {job.company} - {job.year}
              <br />
              {job.description}
            </li>
          ))}
        </ul>
        <p>You can download my full resume here:</p>
        <a href="/Resume 2 - Copy.pdf" download>
          Download Resume (PDF)
        </a>
      </section>
      
      {/* Contact Info */}
      <section id ="contact" style={{ padding: "20px", backgroundColor: "#e2e2e2" }}>
        <h3>Contact Info</h3>
        <p>
          Email: woznia93@msu.edu
          Phone: 586-604-0983
          <a href="https://github.com/woznia93">GitHub</a>    
          <a href="https://www.linkedin.com/in/bradywozniak/">Linkedin</a>
        </p>
      </section>





    </div>
  );
};

export default App;
