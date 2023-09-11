import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function TopNav() {
  const { user, isLoading, loginWithRedirect, isAuthenticated, logout } =
    useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <div className="topnav">
      <div className="topnav-container">
        <div>You are logged in as {user?.name}</div>
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
