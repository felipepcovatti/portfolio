import Head from 'next/head'
import { Header } from '../components/Header'
import { AboutMe } from '../components/AboutMe'
import { ProjectsList } from '../components/ProjectsList'
import { GetStaticProps } from 'next'
import { github } from '../services/github'
import { firebase } from '../services/firebase'
import styles from './home.module.scss'
interface Project {
  id: number
  title: string
  image_url: string
  html_url: string
  description: string
  homepage: string
  languages_url: string
}
interface HomeProps {
  user: {
    name: string
    avatar_url: string
  }
  repos: Project[]
}

export default function Home({ user, repos }: HomeProps) {
  return (
    <div>

      <Head>
        <title>{user.name} - Portfolio</title>
      </Head>

      <div className={styles.aboveTheFoldHome}>
        <Header name={user.name} avatarUrl={user.avatar_url} />
      </div>

      <ProjectsList repos={repos} />

      <AboutMe />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: user } = await github.user.get('')
  const { data: allRepos } = await github.projects.get<Omit<Project, 'title'>[]>('')
  const featuredRepos = (await firebase.featuredProjects.get()).val();

  const repos = featuredRepos.map(({ id, ...rest }) => {
    const repo = allRepos.find(findRepo => findRepo.id === id)
    return {
      ...repo,
      ...rest
    }
  })

  return {
    props: {
      user,
      repos
    },
    revalidate: 60, // one minute
  }
}
