import { axios } from '@/utils'

export function fetchMenu(userid = 'anonymous') {
  return axios.get('/api/menus', {
    params: {
      userid
    }
  })
}
