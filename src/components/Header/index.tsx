import { RichText, RichTextBlock } from 'prismic-reactjs';
import { Link } from 'react-scroll'
import styles from './styles.module.scss'

interface HeaderProps {
  content: {
    name: string
    heading: RichTextBlock[]
    subheading: RichTextBlock[]
    avatarUrl: string
  }
}

export function Header({ content }: HeaderProps) {
  const { name, heading, subheading, avatarUrl } = content;
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div>
          <img src={avatarUrl} alt={`Photo of ${name}`} />
          <div>
            {RichText.render(heading)}
            {RichText.render(subheading)}
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
      </div>
    </header>
  )
}