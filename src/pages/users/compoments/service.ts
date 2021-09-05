import { request } from 'umi'
export const getRemoteList = async (params) => {
  return request('/api/users', {
    method: 'GET',
  })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}
