import axios from 'axios';

export const projectsApi = axios.create({
  baseURL: process.env.REACT_APP_PROJECTS,
});