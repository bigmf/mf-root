import { axios } from '@/utils'
import menus from '../../config/menus'

export function fetchMenu(userid = 'anonymous') {
  // return axios.get('/api/menus', {
  //   params: {
  //     userid
  //   }
  // })
  return Promise.resolve({ data: menus })
}
