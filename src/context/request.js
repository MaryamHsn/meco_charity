import {getToken} from './Utils'
import axios from 'axios'
import {BASE_URL} from './Variables'

const request = axios.create({
    baseURL : BASE_URL
    })
    

  request.interceptors.request.use(
    function (config) {
      const token = getToken()
  
      if (token) {
        config.headers.authorization = `Bearer ${token}`
      }
      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )
  
  export default request