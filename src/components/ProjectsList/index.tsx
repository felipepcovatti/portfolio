import { Project } from "./Project";
import { Container, Content, List } from "./styles";

export function ProjectsList({ repos }) {

  const projects = repos;

  return (
    <Container id="projects">
      <Content>
        <h2>Projects</h2>
        <p>Projects originated in the Front End Web Development Techdegree course
          from teamtreehouse.com, and based on provided mockup images and/or starter files.</p>
        <List>
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </List>
      </Content>
    </Container>
  )
}