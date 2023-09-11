import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function TopNav() {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="topnav">
      <div className="topnav-container">
        <a href="#Home">HOME</a>

        <button className ="button" onClick={() => loginWithRedirect()}>LOGIN</button>
      </div>
    </div>
  )
}

export default TopNav
