import { Post, PostParams } from 'model'
import http from './api'

export const getPostsApi = (params: PostParams): Promise<Post[]> => http.get('/posts', { params })
