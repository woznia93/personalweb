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



type Project = {
  title: string;
  languages: string;
  date: string;
  description: string;
};


const projects: Project[] = [
  {
  title: "Mario Speed Run Assistant",
  languages: "Python",
  date: "October 2023",
  description: "Helped speed run Mario 64"
  },
  {
    title: "Designer Wardrobe",
    languages: "Python",
    date: "January 2024",
    description: "Helped users design their own wardrobe using DALL-E to make new outfits based on outfits they already have"
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
      
      {/* Projects */}
      <section id = "projects" style = {{ padding: "20px", backgroundColor: "#e2e2e2"}}>
          <h2>My Projects</h2>
          <p>My Projects and a summary of what they are/do:</p>
          <ul>
            {projects.map((project,index) => (
              <li key = {index}>
                <strong>{project.title}</strong> with {project.languages} - {project.date}
                <br />
                {project.description}
              </li>
            ))}
          </ul>
        </section>

      {/* Contact Info */}
      <section id="contact" className="contact-section">
      <h3 className="contact-heading">Contact Info</h3>
      <p className="contact-paragraph">
        <strong>Email:</strong> <a href="mailto:woznia93@msu.edu">woznia93@msu.edu</a>
      </p>
      <p className="contact-paragraph">
        <strong>Phone:</strong> 586-604-0983
      </p>
      <p className="contact-paragraph">
        <strong>Find me on:</strong>
        <br />
        <a href="https://github.com/woznia93" className="contact-links">GitHub</a>
        <br />
        <a href="https://www.linkedin.com/in/bradywozniak/" className="contact-links">LinkedIn</a>
      </p>
      </section>
    </div>
  );
};

export default App;
