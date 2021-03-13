import { Project } from "./Project";

export function ProjectsList({ repos }) {

  const projects = repos;

  return (
    <section id="projects" className="container-fluid projects">
      <a href="#projects">
        {/* <!-- svg base code from https://uxwing.com/angle-bottom-icon/ --> */}
        <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 640 640">
          <path fillRule="nonzero" d="M640 110.1v160.6L320 529.9 0 270.7V110.1l320 259.3z"></path>
        </svg>
      </a>
      <div className="container">
        <h2 className="text-muted text-center">Projects</h2>
        <div className="row">
          <div className="col-md-8 mx-auto text-white text-center pb-4">
            <p><b>Important:</b> The projects below were developed based on provided mockups and/or starter files, as
              part of an online course from Treehouse (at teamtreehouse.com). Some of the projects were modified after
              being graded.</p>
          </div>
        </div>
        <div className="row">
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}