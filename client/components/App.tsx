import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import TopNav from './TopNav'
import Main from './Main'

function App() {
  return (
    <>
      <TopNav />
      <Main />
    </>
  )
}

export default App
