import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  var [projects, setProjects] = useState([]);
  var [loading, setLoading] = useState(true);

  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <section id="projects" className="projects section">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map(function (item) {
          return (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.body}
              tech="API Data"
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;