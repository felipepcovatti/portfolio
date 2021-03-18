import { Link } from 'react-scroll'
import { Container, Content } from './styles'

interface HeaderProps {
  name: string
  avatarUrl: string
}

export function Header({ name, avatarUrl }) {
  const firstName = name.split(' ')[0]

  return (
    <Container>
      <Content>
        <div>
          <img src={avatarUrl} alt={`Photo of ${firstName}`} />
          <div>
            <h1><em>Hi</em>, I'm {firstName}<em>.</em></h1>
            <p>On this page you can find some projects I've worked on.</p>
          </div>
        </div>

        <ul>
          <li>
            <Link to="projects" smooth={true}>
              {'<ProjectsList />'}
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true}>
              {'<AboutMe />'}
            </Link>
          </li>
        </ul>
      </Content>
    </Container>

  )
}