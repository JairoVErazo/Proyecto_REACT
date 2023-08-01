import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain='dev-j8kjp2hyhwyxb1fb.us.auth0.com'
  clientId='u6xYUKE4aNuKy7sEuh1kpFKFTlP8BF8Q'
  authorizationParams={{
    redirect_uri: window.location.origin //http://localhost:5173/busqueda
  }}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>
)
