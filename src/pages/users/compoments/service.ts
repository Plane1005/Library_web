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

export const editRemoteList = async ({id, values}) => {
    console.log(id,values);
    return request(`/api/users/${id}`, {
      method: 'PUT',
      data:values
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        console.log(err)
      })
  }
