export function Project({ project }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card mb-5 mb-sm-4">
        <div className="card-img-box">
          <img className="card-img-top" src="img/proj/dashboard.png" alt="Screenshot of the Webapp Dashboard project" />
        </div>
        <div className="card-img-overlay">
          <h3 className="card-title">Webapp Dashboard</h3>
          <div className="card-description">
            <p>
              {project.description}
            </p>
                  It involves:
                  <span className="badge badge-pill badge-html">HTML</span> <span className="badge badge-pill badge-css">CSS</span> <span className="badge badge-pill badge-css">Sass</span>
            <span className="badge badge-pill badge-js">JavaScript</span>
            <span className="badge badge-pill badge-js">Chart.js</span>
          </div>
          <div className="btn-group" role="group">
            <a className="btn btn-outline-light" href="https://github.com/felipepcovatti/td-webapp-dashboard" target="_blank">
              <span>Repository</span>
            </a>
            <a className="btn btn-light" href="https://felipepcovatti.github.io/td-webapp-dashboard" target="_blank">
              <span>Live</span>
              {/* svg base code from https://uxwing.com/external-link-icon/ */}
              <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 640 640">
                <path d="M41.3 10.3H220l73 82.5h-178c-17.5 0-32 14.4-32 32v401.4c0 17.6 14.5 32 32 32h406.4c17.6 0 32-14.4 32-32V344.6l83.2 69.2v185.6a41.4 41.4 0 0 1-41.3 41.3H41.3A41.4 41.4 0 0 1 0 599.4V51.6a41.4 41.4 0 0 1 41.3-41.3zM640-.7L311.4 13.8l104.8 104.8-230.8 230.8 101.2 101.2 230.8-230.8 106.8 106.9L640-.7z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}