import { Project } from "./Project";
import styles from './styles.module.scss'

export function ProjectsList({ repos }) {

  const projects = repos;

  return (
    <section className={styles.container} id="projects">
      <div className={styles.content}>
        <h2>Projects</h2>
        <p>Projects originated in the Front End Web Development Techdegree course
          from teamtreehouse.com, and based on provided mockup images and/or starter files.</p>
        <div className={styles.projectList}>
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}