import axios from 'axios'
import { getStore } from './localStore'
const instance = axios.create({
  timeout: 16000,
})
// 请求拦截
instance.interceptors.request.use(
  (req) => {
    const token = getStore('token')
    if (token) req.headers.token = token
    return req
  },
  (err) => {
    return Promise.reject(err)
  }
)
// 响应拦截
instance.interceptors.response.use(
  (res) => {
    console.log(res.data.code)
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)
export default instance
