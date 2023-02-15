/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQuery } from '@tanstack/react-query'
import { getPostsApi } from 'api'
import reactLogo from 'assets/images/react.svg'
import 'assets/styles/app.css'
import 'assets/styles/app.scss'
import { PostParams } from 'model'
import React from 'react'

const App = () => {
  // const { isLoading, data = [] } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: () => getPostsApi(1, 10)
  // })

  const {
    isLoading, data = [], mutate, mutateAsync
  } = useMutation({
    mutationFn: (params: PostParams) => getPostsApi(params)
  })

  const handleGetData = async () => {
    try {
      await mutateAsync({ _page: 0, _limit: 10 })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <img src={reactLogo} alt="React Logo" width={100} height={100} />
      <h2>
        Tài
        {process.env.HOST}
      </h2>
      <button onClick={handleGetData} type="button">Call API</button>
      {isLoading ? <p>Loading...</p> : data.map((post) => <p key={post.id}>{post.title}</p>)}
    </div>
  )
}

export default App
