import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

function TopNav() {
  const { user, isLoading, loginWithRedirect, isAuthenticated, logout } =
    useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <div className="topnav">
      <div className="topnav-container">
        <div>user: {user?.name}</div>
        <div>
          <Link to="/movie-list">Movie in Local DB</Link>
        </div>
        <div>
          <Link to="/movie">Random Movie</Link>
        </div>
        {!isAuthenticated ? (
          <button className="button" onClick={() => loginWithRedirect()}>
            LOGIN
          </button>
        ) : (
          <button className="button" onClick={() => logout()}>
            LOG OUT
          </button>
        )}
      </div>
    </div>
  )
}

export default TopNav
