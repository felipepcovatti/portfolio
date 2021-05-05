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
}

interface ProjectProps {
  project: Project;
}

export function Project({ project }: ProjectProps) {
  return (
    <div className={styles.container}>
      <img src={project.image.url} alt={`Screenshot of the ${project.title}`} />
      <div className={styles.description}>
        <h3>{project.title}</h3>
        <p>
          {project.description}
        </p>
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