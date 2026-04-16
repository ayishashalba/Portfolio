function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p><strong>Tech:</strong> {props.tech}</p>
    </div>
  );
}

export default ProjectCard;