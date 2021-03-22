import Head from 'next/head'
import { Header } from '../components/Header'
import { AboutMe } from '../components/AboutMe'
import { ProjectsList } from '../components/ProjectsList'
import { GlobalStyle } from '../styles/global'
import { AboveTheFoldHome } from './styles'
interface Project {
  id: number
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

      <AboveTheFoldHome>
      <Header name={user.name} avatarUrl={user.avatar_url} />
      </AboveTheFoldHome>

      <ProjectsList repos={repos} />

      <AboutMe />

      <GlobalStyle />
    </div>
  )
}

export async function getServerSideProps() {
  const userApi = 'https://api.github.com/users/felipepcovatti'
  const user = await (await fetch(userApi)).json()
  const repos = await (await fetch(userApi + '/repos')).json()

  return {
    props: {
      user,
      repos,
    }
  }
}
