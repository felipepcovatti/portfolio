import { Container, Description, Links } from "./styles";
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number
  title: string
  image_url: string
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
      <img src={project.image_url} alt={`Screenshot of the ${project.title}`} />
      <Description>
        <h3>{project.title}</h3>
        <p>
          {project.description}
        </p>
      </Description>
      <Links>
        <a href={project.homepage} target="_blank">
          Live <FaExternalLinkAlt />
        </a>
        <a href={project.html_url} target="_blank">
          Repo <FaCode />
        </a>
      </Links>
    </Container>
  )
}