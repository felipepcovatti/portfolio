import axios from 'axios';

export const github = {
  user: axios.create({
    baseURL: `https://api.github.com/users/${process.env.GITHUB_USER}`,
  }),
  projects: axios.create({
    baseURL: `https://api.github.com/users/${process.env.GITHUB_USER}/repos`,
  })
}