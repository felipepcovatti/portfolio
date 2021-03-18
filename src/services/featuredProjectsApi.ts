
import axios from 'axios';

export const featuredProjectsApi = axios.create({
  baseURL: process.env.REACT_APP_FEATURED_PROJECTS
});
