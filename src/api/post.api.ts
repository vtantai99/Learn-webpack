import { Post } from 'model'
import http from './api'

export const getPostsApi = (_page: number, _limit: number): Promise<Post[]> => http.get('/posts', { params: { _page, _limit } })
