import React from 'react'
import reactlogo from './assets/images/react.svg'
import './assets/styles/app.css'
import './assets/styles/app.scss'

const App = () => (
  <div>
    <img src={reactlogo} alt="React Logo" width={100} height={100} />
    <h2>
      Tài
      {process.env.HOST}
    </h2>
  </div>
)

export default App
