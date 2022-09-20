import axios from 'axios'
import router from '@/router'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  }
});

axiosInstance.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token')
    config.headers = {
      // 'Authorization': `Bearer ` + token
      'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6ImFkbWluLmV2bzI0LnV6IiwiZXhwIjoxNjY2MjY3NTk0LCJ1dWlkIjoidXVsaWQxMjMyMyJ9.1kjDO1c14yrsDoRcsrOYMubcMm-_cQ3wAkhlMyYOz8I9fV1xgOR026OaBfMOeGLxr4n_PgdNzIdCCJN27x3oPQ`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.request.status === 401) {
    router.push('/401');
  } else if (error.request.status === 404) {
    router.push('/404');
  } else if (error.request.status === 500) {
    router.push('/500')
  } else return Promise.reject(error);
})

axiosInstance.interceptors.request.use((response) => {
  return response;
}, (error) => {
  if (error.request.status === 401) {
    router.push('/401');
  } else if (error.request.status === 404) {
    router.push('/404');
  } else if (error.request.status === 500) {
    router.push('/500')
  } else return Promise.reject(error);
})
