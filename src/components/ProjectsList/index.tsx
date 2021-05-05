import { RichText, RichTextBlock } from "prismic-reactjs";
import { Project } from "./Project";
import styles from './styles.module.scss'

interface Project {
  id: number
  title: string
  image: {
    url: string
  }
  html_url: string
  description: string
  homepage: string
}

interface ProjectsProps {
  projects: Project[],
  content: {
    projectsText: RichTextBlock[];
  }
}

export function ProjectsList({ projects, content }: ProjectsProps) {

  return (
    <section className={styles.container} id="projects">
      <div className={styles.content}>
        <h2>Projects</h2>
        {RichText.render(content.projectsText)}
        <div className={styles.projectList}>
          {projects.map(({ id, ...project }) => (
            <Project key={id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}