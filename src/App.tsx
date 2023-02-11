import { useQuery } from '@tanstack/react-query'
import { getPostsApi } from 'api'
import reactlogo from 'assets/images/react.svg'
import 'assets/styles/app.css'
import 'assets/styles/app.scss'
import React from 'react'

const App = () => {
  const { isLoading, data = [] } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPostsApi(1, 10)
  })

  return (
    <div>
      <img src={reactlogo} alt="React Logo" width={100} height={100} />
      <h2>
        Tài
        {process.env.HOST}
      </h2>
      {isLoading ? <p>Loading...</p> : data.map((post) => <p key={post.id}>{post.title}</p>)}
    </div>
  )
}

export default App
