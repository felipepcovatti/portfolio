import axios from 'axios';

type User = {
  name: string
  avatar_url: string
}
interface Repository {
  id: number
  html_url: string
  description: string
  homepage: string
}

const githubApi = axios.create({
  baseURL: 'https://api.github.com/'
})

export function github(username: string) {

  return {
    async user() {
      const { data: user } = await githubApi.get<User>(`users/${username}`)
      return user
    },

    async repositories() {
      const { data: repositories } = await githubApi.get<Repository[]>(`users/${username}/repos`, {
        params: {
      per_page: 50
        }
      })
      return repositories
    }
  }
}