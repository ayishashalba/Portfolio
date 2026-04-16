function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-section">
          <h2 className="section-title">Who am I?</h2>

          <p className="about-text">
            Hi, I'm <strong>Ayisha Shalba</strong>, a B.Sc Computer Science graduate
            and passionate MERN Stack Developer. I enjoy building web
            applications that solve real-world problems and deliver meaningful
            user experiences.
          </p>

          <p className="about-text">
            My main interest lies in <strong>backend development</strong>, where
            I focus on designing scalable APIs, structuring databases
            efficiently, and implementing secure authentication systems.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Professional Summary</h2>

          <p className="about-text">
            I am a backend-focused MERN Stack Developer with hands-on experience
            in building production-ready applications. I specialize in developing
            RESTful APIs using <strong>Node.js</strong> and{" "}
            <strong>Express.js</strong>, managing MongoDB databases with
            Mongoose, and implementing secure authentication systems.
          </p>

          <p className="about-text">
            I have deployed applications using AWS EC2, MongoDB Atlas, Nginx,
            and PM2, gaining practical exposure to cloud infrastructure and
            server management.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;