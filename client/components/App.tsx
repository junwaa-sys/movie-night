import TopNav from './TopNav'
import Main from './Main'
import MoiveList from './MovieList'
import { Routes, Route } from 'react-router-dom'

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
