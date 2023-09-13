import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import TopNav from './TopNav'
import Main from './Main'
import Reviews from './Reviews'

function App() {
  return (
    <>
      <TopNav />
      <Main />
    </>
  )
}

export default App
