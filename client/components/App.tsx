import { Routes, Route } from 'react-router-dom'
import TopNav from './TopNav'
import Main from './Main'
import MoiveList from './MoiveList'

function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie" element={<Main />} />
        <Route path="/movie-list" element={<MoiveList />} />
      </Routes>
    </>
  )
}

export default App
