function ProjectsPage() {
  return (
    <section className="projects-page">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>

        <div className="project-box">
          <h3 className="project-name">MERN E-Commerce Platform</h3>

          <p className="project-description">
            Built a full-stack e-commerce platform with JWT authentication,
            product filtering, cart functionality, and admin product management.
            Designed secure APIs and structured MongoDB collections for scalable
            product and order handling.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JWT</span>
          </div>

          <div className="project-buttons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="project-btn filled-btn"
            >
              View Code
            </a>

            <a
              href="https://scentoras.online"
              target="_blank"
              rel="noreferrer"
              className="project-btn outline-btn"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-box">
          <h3 className="project-name">Portfolio Website</h3>

          <p className="project-description">
            Developed a personal portfolio website using React to showcase
            skills, projects, and contact details. Implemented page navigation,
            responsive design, and a contact form connected to an Express
            backend with MongoDB Atlas integration.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>CSS</span>
            <span>Express</span>
            <span>MongoDB Atlas</span>
          </div>

          <div className="project-buttons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="project-btn filled-btn"
            >
              View Code
            </a>

            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
              className="project-btn outline-btn"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;