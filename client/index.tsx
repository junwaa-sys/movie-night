import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="dev-q2tnfzhtn06lumms.us.auth0.com"
      clientId="pXmDietKnRZOA5Kk6C9vwqtXhRpUiQko"
      redirectUri={`${window.location.origin}/dashboard`}
      audience="https://dev-q2tnfzhtn06lumms.us.auth0.com/api/v2/"
    >
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </Auth0Provider>,
  )
})
