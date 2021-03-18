import { Container } from "./styles";

interface Project {
  id: number
  title: string
  html_url: string
  description: string
  homepage: string
  languages_url: string
}

interface ProjectProps {
  project: Project;
}

export function Project({ project }: ProjectProps) {
  return (
    <Container>
      <div>
        <div>
          <img src="img/proj/dashboard.png" alt={`Screenshot of the ${''}`} />
        </div>
        <div>
          <div>
            <h3>{project.title}</h3>
            <p>
              {project.description}
            </p>
          </div>
          <div role="group">
            <a href={project.html_url} target="_blank">
              <span>Repository</span>
            </a>
            <a href={project.homepage} target="_blank">
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}