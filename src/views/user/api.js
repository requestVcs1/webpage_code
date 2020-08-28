import axios from '../../utils/axios'
// 登录
export function LoginApi(data) {
  return axios({
    url: '/login',
    method: 'post',
    data,
  })
}
// 注册
export function RegisterApi(data) {
  return axios({
    url: '/register',
    method: 'post',
    data,
  })
}
