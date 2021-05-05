import Head from 'next/head'
import { Header } from '../components/Header'
import { AboutMe } from '../components/AboutMe'
import { Projects } from '../components/Projects'
import { GetStaticProps } from 'next'
import { github } from '../services/github'
import styles from './home.module.scss'
import { getPrismicClient } from '../services/prismic'
import { RichTextBlock } from 'prismic-reactjs'
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

type Content = {
  heading: RichTextBlock[]
  subheading: RichTextBlock[]
  about_text: RichTextBlock[]
  background_image: {
    url: string,
    mobile: {
      url: string
    }
  }
  projects_text: RichTextBlock[]
}

type User = {
  name: string
  username: string
  avatar_url: string
}
interface HomeProps {
  user: User
  projects: Project[]
  content: Content
}

export default function Home({ user, projects, content }: HomeProps) {
  const {
    heading,
    subheading,
    about_text: aboutText,
    background_image: backgroundImage,
    projects_text: projectsText
  } = content;
  const { avatar_url: avatarUrl } = user;
  const name = user.name.split(' ')[0];
  const username = user.username;

  return (
    <div>
      <Head>
        <title>{name} - Portfolio</title>
      </Head>

      <style jsx>{`
        .${styles.aboveTheFoldHome} {
          background-image: url(${backgroundImage.mobile.url});
        }

        @media(min-width: 720px) {
          .${styles.aboveTheFoldHome} {
            background-image: url(${backgroundImage.url});
          }
        }
      `}</style>

      <div className={styles.aboveTheFoldHome}>
        <Header content={{ name, heading, subheading, avatarUrl }} />
      </div>

      <Projects projects={projects} content={{ projectsText }} />

      <AboutMe content={{ aboutText, username }} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const {
    data: {
      username,
      projects: selectedProjects,
      ...content
    }
  } = await prismic.getSingle('content', {})

  const user = await github(username).user()
  const repositories = await github(username).repositories()

  const projects = selectedProjects.map(({ id, ...rest }) => {
    const repository = repositories.find(repo => repo.id === id)
    return {
      ...repository,
      ...rest
    }
  })

  return {
    props: {
      user: {
        ...user,
        username
      },
      projects,
      content
    },
    revalidate: 60, // one minute
  }
}
