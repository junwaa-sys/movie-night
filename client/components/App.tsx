import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import TopNav from './TopNav'

function App() {
  return (
    <>
      <TopNav />
      <div className="app">
        <h1>TEST</h1>
      </div>
    </>
  )
}

export default App
