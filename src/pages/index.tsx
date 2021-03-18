import Head from 'next/head'
import { About } from '../components/About'
import { Header } from '../components/Header'
import { ProjectsList } from '../components/ProjectsList'
import { GlobalStyle } from '../styles/global'
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
    <div className={styles.container}>
      <Head>
        <title>{user.name} - Portfolio</title>
      </Head>
      <div className="background-div">
      </div>
      <Header name={user.name} avatarUrl={user.avatar_url} />

      <ProjectsList repos={repos} />

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
