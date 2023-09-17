import { Routes, Route } from 'react-router-dom'
import TopNav from './TopNav'
import Main from './Main'
import MoiveList from './MoiveList'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { user } = useAuth0()

  return (
    <>
      <TopNav user={{ name: user?.name, image: user?.picture }} tabs={[]} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie" element={<Main />} />
        <Route path="/movie-list" element={<MoiveList />} />
      </Routes>
    </>
  )
}

export default App
