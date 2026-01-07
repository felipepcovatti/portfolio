import styles from './styles.module.scss'
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string
  image: {
    url: string
  }
  html_url: string
  description: string
  homepage: string
  created_at: string
  updated_at: string
}

interface ProjectProps {
  project: Project;
}

function toYear(isoDate: string) {
  return new Date(isoDate).getUTCFullYear()
}

export function Project({ project }: ProjectProps) {
  const createdIn = toYear(project.created_at)
  const updatedIn = toYear(project.updated_at)
  return (
    <div className={styles.container}>
      <img src={project.image.url} alt={`Screenshot of the ${project.title}`} />
      <div className={styles.description}>
        <h3>{project.title}</h3>
        <p>
          {project.description}
        </p>
        <small>
          Created in {createdIn}
          { createdIn !== updatedIn && <> and updated in {updatedIn}</>}
          .
        </small>
      </div>
      <div className={styles.buttonsContainer}>
        <a href={project.homepage} target="_blank">
          Live <FaExternalLinkAlt />
        </a>
        <a href={project.html_url} target="_blank">
          Repo <FaCode />
        </a>
      </div>
    </div>
  )
}