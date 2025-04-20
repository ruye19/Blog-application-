import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './app.css'
import { AuthContextProvider } from './component/context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthContextProvider>
      <App />
    </AuthContextProvider>

  </StrictMode>
)
