import { Link } from 'react-scroll'
import { Container, Content } from './styles'

interface HeaderProps {
  name: string
  avatarUrl: string
}

export function Header({ name, avatarUrl }: HeaderProps) {
  const firstName = name.split(' ')[0]

  return (
    <Container>
      <Content>
        <div>
          <img src={avatarUrl} alt={`Photo of ${firstName}`} />
          <div>
            <h1><em>Hi</em>, I'm {firstName}<em>.</em></h1>
            <p>Here you can find some [course] projects I've worked on.</p>
          </div>
        </div>

        <ul>
          <li>
            <Link to="projects" smooth={true}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true}>
              About Me
            </Link>
          </li>
        </ul>
      </Content>
    </Container>

  )
}