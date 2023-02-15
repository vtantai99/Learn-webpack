export interface Post {
  userId: string
  id: number
  title: string
  body: string
}

export interface PostParams {
  _page: number
  _limit: number
}
