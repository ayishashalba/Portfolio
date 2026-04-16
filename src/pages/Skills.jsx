function Skills() {
  return (
    <section className="skills-page">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>

        <div className="skills-grid">
          {/* Languages */}
          <div className="skill-card">
            <h3>Languages</h3>

            <div className="skill-item">
              <div className="skill-head">
                <span>JavaScript (ES6+)</span>
                <span>90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-head">
                <span>TypeScript</span>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="skill-card">
            <h3>Frontend</h3>

            <div className="skill-item">
              <div className="skill-head">
                <span>React.js</span>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-head">
                <span>HTML5 & CSS3</span>
                <span>95%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-head">
                <span>Tailwind CSS</span>
                <span>80%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-card">
            <h3>Backend</h3>

            <div className="skill-item">
              <div className="skill-head">
                <span>Node.js</span>
                <span>80%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-head">
                <span>Express.js</span>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="skill-card">
            <h3>Database</h3>

            <div className="skill-item">
              <div className="skill-head">
                <span>MongoDB</span>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;