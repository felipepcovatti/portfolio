import { Project } from "./Project";
import styles from './styles.module.scss'

export function ProjectsList({ repos }) {

  const projects = repos;

  return (
    <section className={styles.container} id="projects">
      <div className={styles.content}>
        <h2>Projects</h2>
        <p>Projects originated from online coding courses, and based on provided mockup images and/or starter files. Please, refer to each repository (Repo) for more information.</p>
        <div className={styles.projectList}>
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}