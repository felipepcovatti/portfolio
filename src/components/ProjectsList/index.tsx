import { Project } from "./Project";
import { Container, Content } from "./styles";

export function ProjectsList({ repos }) {

  const projects = repos;

  return (
    <Container id="projects">
      <Content>
        <h2>Projects</h2>
        <div>
          <p>Note: Some projects originated from online courses and were developed based on
          provided mockups, starter files and/or following intructor guidance.
            Please, refer to each repository README.md file for details :)</p>
        </div>
        <div>
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </Content>
    </Container>
  )
}