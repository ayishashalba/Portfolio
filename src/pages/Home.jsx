import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">
      <div className="bg-overlay"></div>
      <div className="hero-grid">
        <div className="hero-left">
          <h3 className="hero-title">
            Hi, I'm Ayisha
            <br />
            Shalba
          </h3>

          <h2 className="hero-subtitle">
            Backend-Focused MERN Stack
            <br />
            Developer
          </h2>

          <p className="hero-text">
            I build scalable and secure web applications with a strong focus on
            backend architecture. From designing RESTful APIs to deploying
            production-ready systems on the cloud, I enjoy creating reliable
            solutions that solve real-world problems. Passionate about clean
            code, performance optimization, and continuous learning.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="primary-btn">
              VIEW MY WORK
            </Link>

            <Link to="/contact" className="secondary-btn">
              LET&apos;S CONNECT
            </Link>
          </div>

          <div className="hero-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hero-link"
            >
              LINKEDIN
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hero-link"
            >
              GITHUB
            </a>

            <a href="mailto:ayishashalba555@gmail.com" className="hero-link">
              EMAIL
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-ring">
            <img
              src="/profile.jpg"
              alt="Ayisha shalba"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;