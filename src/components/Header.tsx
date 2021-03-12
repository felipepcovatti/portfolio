interface HeaderProps {
  name: string
  avatarUrl: string
}

export function Header({ name, avatarUrl }) {
  const firstName = name.split(' ')[0]

  return (
    <header className="abovethefold">
      <div className="jumbotron jumbotron-fluid">
        <div className="container header-container">
          <div className="row">
            <div className="col order-md-last">
              <div className="profile-pic-box">
                <img className="rounded-circle" src={avatarUrl} alt="Photo of Felipe" />
              </div>
            </div>
            <div className="col-md-8 col-lg-9 order-md-first">
              <h1><em className="text-secondary">Hi</em>, I'm {firstName}<em className="text-secondary">.</em></h1>
              <p className="lead mb-0">On this page you can find some projects I've worked on.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-side container">
        <ul className="nav nav-cta">
          <li className="nav-item">
            <a className="nav-link btn btn-primary btn-lg" href="#projects">View projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-secondary btn-lg" href="#about">About me</a>
          </li>
        </ul>
      </div>
    </header >
  )
}